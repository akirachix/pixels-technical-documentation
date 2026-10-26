
# Postman Examples

Postman is used to test MvuviGo API endpoints, verify responses, and identify errors.

## 1. Set Up Postman

1. Start the FastAPI backend.
2. Open Postman and create a collection named `MvuviGo API Tests`.
3. Use `http://localhost:8000` as the base URL.

## 2. Test GET Requests

Use GET to retrieve data from an endpoint.

**Example: Retrieve Fishers**

```http
GET http://localhost:8000/api/fishers
```

Click **Send** and verify the status code and returned data.

## 3. Test POST Requests

Use POST to create a new record.

**Example: Create a Fisher**

```http
POST http://localhost:8000/api/fishers
Content-Type: application/json
```

Under **Body → raw → JSON**, enter:

```json
{
  "name": "Test Fisher",
  "phone_number": "0700000000"
}
```

Click **Send** and verify that the record is created successfully.

## 4. Test PUT Requests

Use PUT to replace or update a resource, depending on the API implementation.

**Example: Update a Fisher**

```http
PUT http://localhost:8000/api/fishers/1
Content-Type: application/json
```

Example body:

```json
{
  "name": "Updated Fisher",
  "phone_number": "0712345678"
}
```

Click **Send** and verify that the response reflects the updated information.

## 5. Test PATCH Requests

Use PATCH to update specific fields of an existing record.

**Example: Update a Fisher's Phone Number**

```http
PATCH http://localhost:8000/api/fishers/1
Content-Type: application/json
```

Example body:

```json
{
  "phone_number": "0712345678"
}
```

Verify that the phone number changes and other fields remain unchanged.

## 6. Test DELETE Requests

Use DELETE to remove an existing record.

**Example: Delete a Fisher**

```http
DELETE http://localhost:8000/api/fishers/1
```

Click **Send** and check the response status code. Send a GET request for the same ID to verify that the record has been removed.

## 7. Test Authentication

1. Send a request to the login endpoint.
2. Copy the access token from the response.
3. Open **Authorization** and select **Bearer Token**.
4. Paste the token and send a request to a protected endpoint.
5. Repeat without a token to check whether unauthorized access is rejected.

## 8. Test Invalid Inputs

Test requests with:
- Missing required fields
- Incorrect data types
- Invalid record IDs
- Missing or invalid authentication tokens

Verify that the API returns appropriate error responses.

| Status Code | Meaning |
|---|---|
| 200 | Request successful |
| 201 | Resource created |
| 204 | Request successful, no response body |
| 401 | Unauthorized |
| 404 | Resource not found |
| 422 | Validation error |
| 500 | Internal server error |

## 9. Validate Responses

Under **Scripts → Post-response**, add assertions:

```javascript
pm.test("Status code is 200", () => {
    pm.response.to.have.status(200);
});

pm.test("Response is JSON", () => {
    pm.response.to.be.json;
});
```

Adjust the expected status code to match the endpoint. For example, a successful DELETE request may return `200` or `204`.

## 10. Record Test Results

For failed requests, record the endpoint, test data, expected result, actual result, and steps to reproduce the issue. Retest after fixes to confirm that the endpoint works correctly.
