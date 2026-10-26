# MvuviGo Technical Documentation

Technical documentation for the MvuviGo fisher safety and rescue coordination system, built with
[MkDocs](https://www.mkdocs.org/) and
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

## Status

This repository contains the initial documentation scaffold. Detailed
technical content will be added and verified against the relevant source
repositories and project references.

## Documentation structure

| Directory | Purpose |
| --- | --- |
| `docs/overview/` | System purpose, features, technology stack and implementation status |
| `docs/architecture/` | System architecture, components and data flow |
| `docs/repository/` | Backend and frontend repository layouts |
| `docs/database/` | Database design and key entities |
| `docs/api/` | Backend API reference |
| `docs/frontend/` | Web dashboard architecture and components |
| `docs/workflows/` | Operational workflows |
| `docs/communication/` | Field communication, hardware and SMS integration |
| `docs/setup/` | Development environment setup |
| `docs/testing/` | Testing guidance and troubleshooting |
| `docs/security/` | Security controls and reliability |
| `docs/deployment/` | Deployment and contribution workflow |

## Prerequisites

- Python 3.10 or later
- pip

## Local development

Create and activate a virtual environment:

    python3 -m venv .venv
    source .venv/bin/activate

Install dependencies:

    python -m pip install -r requirements.txt

Run the local preview:

    mkdocs serve

Build the documentation:

    mkdocs build --strict

The generated site is written to `site/`, which is excluded from version control.

## Publishing

1. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Set `repo_url` and `site_url` in `mkdocs.yml`.
3. Merge to `main`. The workflow builds with `--strict` and deploys to GitHub Pages.

## Contribution workflow

1. Create a feature branch.
2. Make a focused documentation change.
3. Run `mkdocs build --strict`.
4. Review changes with `git diff --check`.
5. Commit and push the feature branch.
6. Open a pull request for review.

## Quality expectations

- Keep navigation entries aligned with existing documentation pages.
- Verify technical claims against authoritative project sources.
- Never include credentials, access tokens, or other secrets.
- Keep changes focused and reviewable.
- Ensure the strict documentation build passes before opening a pull request.

## Claude skill

`.claude/skills/mvuvigo-docs/SKILL.md` gives Claude Code the conventions for this repo.