/**
 * Identifies the server build that handled a request without exposing any
 * credentials. It lets the CMS compare its save response with public HTML.
 */
export function getRuntimeDeploymentMarker(): string {
  return (
    process.env.VERCEL_DEPLOYMENT_ID ||
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.VERCEL_URL ||
    "local"
  );
}
