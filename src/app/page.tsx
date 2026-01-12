import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  let session = null;
  let sessionError = "";

  try {
    session = await getServerSession(authOptions);
  } catch {
    sessionError = "Unable to load session.";
  }

  const email = session?.user?.email ?? "";

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <main className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-zinc-900">Nexmorai</h1>
        <p className="mt-2 text-sm text-zinc-600">Phase 0 authentication check</p>
        {sessionError ? (
          <p className="mt-6 text-sm text-red-600">{sessionError}</p>
        ) : email ? (
          <div className="mt-6 space-y-4">
            <p className="text-sm text-zinc-700">
              Signed in as <span className="font-medium text-zinc-900">{email}</span>
            </p>
            <a
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
              href="/api/auth/signout"
            >
              Sign out
            </a>
          </div>
        ) : (
          <div className="mt-6">
            <a
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
              href="/api/auth/signin"
            >
              Sign in
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
