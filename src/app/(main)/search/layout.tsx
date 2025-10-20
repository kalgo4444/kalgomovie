import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KalgoMovie | Search',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
