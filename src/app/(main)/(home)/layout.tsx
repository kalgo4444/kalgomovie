import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KalgoMovie | Home',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
