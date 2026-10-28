# Installation

MvuviGo's runtime platform is maintained in three separate repositories. Clone the services you need; you do not need to clone every repository to edit one component. These commands use the repository URLs recorded in this documentation. GitHub access may require membership or permissions.

## 1. Clone the application repositories

From a workspace directory where you want the repositories created:

```bash
git clone https://github.com/akirachix/pixels-backend.git
git clone https://github.com/akirachix/pixels-frontend.git
git clone https://github.com/akirachix/pixels-iot.git
```

The commands create sibling directories named `pixels-backend`, `pixels-frontend` and `pixels-iot`. If you only need one component, clone only that repository.

## 2. Inspect each service before installing dependencies

```bash
cd pixels-backend
git status --short
```

Read the repository's `README.md`, `pyproject.toml` and any `.env.example` before installing or configuring it. Return to the workspace root before entering another repository. For the frontend and IoT gateway, use their `README.md`, `package.json`, lockfile and `.env.example` as the source of truth for scripts, Node.js versions and configuration.

## 3. Install service dependencies

### Backend

The current project documentation identifies `uv` as the backend environment/dependency tool. From the backend repository root, use the command documented by its `pyproject.toml` and README; the expected project workflow is:

```bash
uv sync
```

If the repository documents a different setup command, use that repository's instructions.

### Frontend and IoT gateway

In each Node.js repository that includes a `package-lock.json`, install its locked dependencies with:

```bash
npm ci
```

Run this separately from the `pixels-frontend` and `pixels-iot` directories. If a repository uses a different package manager or has no npm lockfile, follow its own README rather than generating or replacing a lockfile by assumption.

## 4. Continue setup

- Configure only local values as described in [Environment Variables](./environment-variables.md).

- Create the local database and run backend migrations using [Database Setup](./database-setup.md).

- Start available services using [Run Locally](./run-locally.md).

## Common installation problems

| Symptom | Next step |
| --- | --- |
| `Repository not found` or permission denied | Confirm the URL, GitHub account and repository access. Do not embed a personal access token in the clone URL. |
| `uv: command not found` | Install `uv` using its official installation instructions, reopen the terminal and run `uv --version`. |
| `npm ci` reports a Node.js engine/version error | Check the repository's `engines` field and use its documented Node.js version. Keep the committed lockfile. |
| Dependencies install but a service will not start | Read that repository's startup scripts, `.env.example` and README; do not guess an entry point or environment variable. |