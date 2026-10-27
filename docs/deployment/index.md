# Deployment and Contribution

This section covers how code gets from your laptop into the shared project, and how each part of MvuviGo is built, deployed, monitored and recovered.

## In this section

- [Branching and pull requests](./branching-and-prs.md): the branch and PR workflow every change follows.
- [Code contribution](./code-contribution.md): coding standards and what reviewers check.
- [Deployment](./deployment.md): hosting, environments, configuration, release, monitoring and rollback for the backend, the dashboard and these docs.

## The repositories

| Repository | What it is |
| --- | --- |
| `pixels-backend` | FastAPI backend, SQLAlchemy models, Alembic migrations. |
| `pixels-frontend` | Next.js dashboard for station operators. |
| `pixels-informational-website` | The public MvuviGo website. |
| `pixels-technical-documentation` | This documentation site. |

![Build and deployment pipeline](../assets/deployment-pipeline.svg)
