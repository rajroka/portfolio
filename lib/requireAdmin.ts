import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME, JwtPayload } from './auth';

/**
 * Call at the top of any admin API route handler.
 * Returns the decoded payload if valid, or a 401 NextResponse to return directly.
 *
 * Usage:
 *   const auth = await requireAdmin();
 *   if (auth instanceof NextResponse) return auth;
 *   // auth is JwtPayload
 */
export async function requireAdmin(): Promise<JwtPayload | NextResponse> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const payload = verifyToken(token);
  if (!payload) {
    return NextResponse.json({ success: false, error: 'Invalid or expired token' }, { status: 401 });
  }

  return payload;
}
