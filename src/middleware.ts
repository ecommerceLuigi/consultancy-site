// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || '';
  
  // Set the custom header based on the detected host
  const response = NextResponse.next();
  response.headers.set('x-custom-domain', host.includes('luigimoccia.ca') ? 'ca' : 'com');

  return response;
}

// Apply middleware only on paths where it’s needed (e.g., all pages)
export const config = {
  matcher: '/',
};
