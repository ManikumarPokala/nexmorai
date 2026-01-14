### Added Section
# UX Flow (Current Snapshot)

Implemented user journey:
- Entry: `/` home page
- Authentication: GitHub OAuth via NextAuth
- Signed-in state: shows user email and Sign out
- Signed-out state: shows Sign in
- Error state: session load failure message

Decision-maker flows (CIO/Head of Analytics):
- Not implemented in this repo snapshot.

Trust-building behaviors:
- Minimal: explicit error message on session load failure.

Empty/loading/reassurance states:
- Session error message is displayed when authentication state cannot be loaded.
