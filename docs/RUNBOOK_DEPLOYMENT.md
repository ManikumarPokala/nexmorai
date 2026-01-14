### Added Section
# Deployment Runbook (Current Snapshot)

## Build + start (local)
```
npm run build
PORT=3001 npm run start
```

## Health check
```
curl -i http://localhost:3001/api/health
```

## Auth verification
- Visit `/` and complete GitHub sign-in.
- Confirm the email renders on the home screen.

## Strategy endpoint smoke test
- Not implemented in this repo snapshot.

## Compute chain smoke test
- Not implemented in this repo snapshot.

## Rollback
```
# If using git
 git revert <bad-commit-sha>

# Redeploy the previous build artifact
```
