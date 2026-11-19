import { next } from '@vercel/functions';

// Password protection for the staging site (htaccess-style Basic Auth).
// Only switches on when STAGING_PASSWORD is set, which is only on the
// caretailor-staging Vercel project. Production has no such variable, so
// this lets every request straight through there.
export const config = {
  matcher: '/:path*',
};

export default function middleware(request) {
  const password = process.env.STAGING_PASSWORD;
  if (!password) return next();

  const auth = request.headers.get('authorization') || '';
  const [scheme, encoded] = auth.split(' ');
  if (scheme === 'Basic' && encoded) {
    const decoded = atob(encoded);
    const supplied = decoded.slice(decoded.indexOf(':') + 1);
    if (supplied === password) {
      return next({ headers: { 'X-Robots-Tag': 'noindex, nofollow' } });
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="CareTailor staging", charset="UTF-8"',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}
