# Forms and Validation

Forms are plain React controlled inputs. Each form holds its field values, field errors and a `submitting` flag in local state, validates on submit, and only then calls `lib/api.js`.

## Forms in the app

| Form | Page | Fields | Submit |
| --- | --- | --- | --- |
| Sign in | `/login` | Email, Password | **Login** |
| Create account | `/register` | First Name, Last Name, Email, Password, Confirm Password | **Create Account** |
| Add fisher | Fishers | Fisher details, including name and phone number | **Add Fisher** |
| Assign wristband | Wristbands | Wristband, fisher | **Assign** |
| Reset code | Settings | Operator Email (read from the account) | **Send Reset Code** |
| Change fisher phone | Settings | Search by name, new phone number, confirm new phone number | **Save Changes** |
| Search and filters | Fishers, Wristbands, Reports | Search text, date range | Applied as the operator types or picks |

## Validation rules

| Field | Rule |
| --- | --- |
| Email | Required, valid email format |
| Password (login) | Required |
| Password (register) | Required, minimum length |
| Confirm Password | Required, must equal Password |
| First Name, Last Name | Required |
| Phone number | Required, valid Kenyan format such as `+254 7xx xxx xxx` |
| Confirm new phone number | Required, must equal the new phone number |
| Fisher search | Required before **Save Changes** is enabled |

## Behaviour

- Errors appear under the field that caused them, in plain words (for example "Passwords do not match").
- A form with errors is not sent to the backend.
- While a request is running, the submit button is disabled and shows a loading label to stop double submits.
- Backend validation errors (`422`) are shown next to the matching fields, and other failures show a message at the top of the form.
- After a successful submit the form shows a short success message, then redirects or refreshes the list.

