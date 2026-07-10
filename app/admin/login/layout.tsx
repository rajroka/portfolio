import { Suspense } from 'react';

export default function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  // Wrap in Suspense because useSearchParams() needs it in Next.js 13+
  return <Suspense fallback={null}>{children}</Suspense>;
}
