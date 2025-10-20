import { Metadata } from 'next';
import MovieProvider from './provider';

export const metadata: Metadata = {
  title: 'KalgoMovie | Movie',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MovieProvider>{children}</MovieProvider>
    </>
  );
}
