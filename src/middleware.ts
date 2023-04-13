// IMPORTANT: This file MUST be named "middleware" and MUST be placed alongside the ./pages directory.

import { withClerkMiddleware } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

// Next.js documentation on middleware:
// https://nextjs.org/docs/advanced-features/middleware

export default withClerkMiddleware(() => {
  return NextResponse.next()
})

/**
 * A config that prevents middleware from running on static files.
 */
export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
}
