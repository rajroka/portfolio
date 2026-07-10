import { AdminAuthProvider } from '@/contexts/AdminAuthContext';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Admin | Portfolio',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      {children}
      <Toaster position="top-right" />
    </AdminAuthProvider>
  );
}
