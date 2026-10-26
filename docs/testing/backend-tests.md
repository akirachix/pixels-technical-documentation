# Backend Tests

The MvuviGo backend handles critical operations like verifying operator credentials, managing fisher records, and saving SOS alerts. Because these operations are time-sensitive and life-critical, we rely heavily on automated testing. It ensures that new features do not accidentally break existing functionality before any code is merged or deployed.

## Testing Stack
* **Pytest:** The primary testing framework used to write and run the Python tests. It is fast, scalable, and allows us to easily mock external services.
* **SQLite In-Memory:** To keep tests fast and isolated, the test suite spins up a temporary SQLite database in memory. This means running the tests will not modify or corrupt your local PostgreSQL development database.
* **GitHub Actions:** Our CI/CD pipeline automatically runs the test suite on every pull request and push to the repository. If any test fails, the pipeline blocks the merge, ensuring that broken code never reaches production.

## Running the Tests Locally
Before you push your code, you should run the tests locally to catch errors early. Make sure you are in the `pixels-backend` directory with your virtual environment activated, then run:

```bash
uv run --no-sync pytest