import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const session = await auth.api.getSession({
    headers:await headers()
  })

  if (!session) {
    const { pathname, search } = request.nextUrl
    const url = new URL('/signin', request.url)
    url.searchParams.set('callbackUrl', pathname + search)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/add-ideas','/my-ideas', '/all-ideas/:path'],
}