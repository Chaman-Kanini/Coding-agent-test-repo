# TaskTracker

Generated from the approved design. The structure is the standard one for each part of the stack. Nothing here holds
business logic: the services and screens are stubs for the team to fill in.

| Folder | What |
|---|---|
| `contracts/` | The approved API contract and the screens' routes. Change them first, then the code. |
| `backend/` | The .NET API in clean architecture (`dotnet build backend/TaskTracker.sln`). |
| `frontend/` | The React app (`npm run build` in `frontend/`). |
| `db/` | The first migration. `cp .env.example .env`, then `docker compose up db`. |
| `ci/github-actions.yml` | The CI workflow, one job per part of the stack. Move it to `.github/workflows/ci.yml` to turn it on. |
| `.propel/scaffold.json` | Which skills, at which version, made this skeleton. |

## Modules

- TaskItem
- TeamMember
- Label
