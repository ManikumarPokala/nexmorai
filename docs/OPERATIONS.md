# Operations Guide

## Push = Deploy
Assumption: pushing to the main branch triggers deployment in your CI/CD system.

## Required environment variables
- DATABASE_URL
- NEXTAUTH_SECRET
- NEXTAUTH_URL
- GITHUB_ID
- GITHUB_SECRET

## Incident basics
### Logs
- Check your runtime logs (stdout/stderr from the Node.js process).

### Health endpoint
- Not implemented in this repo snapshot.

### Rate limiting
- Not implemented in this repo snapshot.

### Rollback
```
# If using git
 git revert <bad-commit-sha>

# Redeploy the previous build artifact
```
