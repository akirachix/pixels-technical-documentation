# Postman Examples

Use Postman to inspect the documented API in a local or approved test environment. The route examples below are taken from the MvuviGo API reference. Do not use real fisher data or send SOS test requests to a live service.

## 1. Set up a collection and variables

1. Create a collection named `MvuviGo Local API`.

1. Add collection variables:
  - `baseUrl`: `http://localhost:8000`
  - `accessToken`: leave empty until you have obtained a token through the documented authentication flow.

1. Use the endpoint paths exactly as written in [API Endpoints](../api/endpoints.md). Some resources use different prefixes and trailing-slash conventions.

## 2. Verify API availability

Create a request:

```
GET {{baseUrl}}/health
```

The API reference documents this route as unauthenticated. Expected result: `200` and a JSON object. This check confirms only that the API health route responds; it does not validate the database, MQTT, SMS or rescue workflow unless the implementation explicitly includes those checks.

## 3. Check an authenticated read endpoint

After completing the flow in [API Authentication](../api/authentication.md), set `accessToken` to the issued access token and create:

```
GET {{baseUrl}}/api/fishers/?skip=0&limit=100
Authorization: Bearer {{accessToken}}
Accept: application/json
```

The API reference documents this path as requiring Bearer authentication. Expected result for a valid token is `200` with a JSON array. An unauthenticated or invalid-token request should be rejected according to the authentication behavior documented by the backend.

For sensitive or empty test databases, prefer a read-only request. Do not create or delete production records for a manual test.

## 4. Test validation safely

To test a protected endpoint's authentication behavior, repeat the read request without the `Authorization` header and record the actual status and response body. To test request validation, use a disposable local environment and choose an endpoint whose request schema is documented in [Schemas](../api/schemas.md). Avoid sending malformed requests to a live service.

## 5. Check responses

Record the method, full path, environment, status code, response time, and a redacted response excerpt. The endpoint reference documents common success patterns, including `200` for reads/actions, `201` for creates and `204` for deletes; always use the specific endpoint's documented response rather than assuming every request returns the same status.

Example Postman post-response checks for the health request:

```javascript
pm.test("Health route returns 200", () => {
  pm.response.to.have.status(200);
});
pm.test("Response is JSON", () => {
  pm.response.to.be.json;
});
```

## 6. Record a reproducible failure

For a failed request, record the API version or commit, method and route, test environment, redacted request shape, expected result, actual result, and steps to reproduce. Do not include bearer tokens, passwords, phone numbers or precise fisher locations. See [Common Issues](./common-issues.md) for local diagnostics.