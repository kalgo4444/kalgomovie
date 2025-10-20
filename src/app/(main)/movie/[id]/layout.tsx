import { getMovieDetail } from '@/shared/hooks/useMovie';
import { IMovieDetail } from '@/shared/interface/movieDetail.interface';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id } = await params;
  const movieDetail = await getMovieDetail<IMovieDetail>(id);

  return {
    title: movieDetail.title,
    description: movieDetail.overview,
  };
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
