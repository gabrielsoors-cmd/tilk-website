import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Forwards the current pathname to Server Components (e.g. the root layout)
// via a request header, so we can set <html lang="..."> and other
// language-dependent values correctly for /en/* pages without having to
// duplicate the root layout.
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', request.nextUrl.pathname)

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  // Skip Next.js internals and static files - we only need the pathname
  // for actual pages.
  matcher: ['/((?!_next/static|_next/image|favicon.ico|favicon-|icon.png|apple-icon.png|opengraph-image|images/).*)'],
}
