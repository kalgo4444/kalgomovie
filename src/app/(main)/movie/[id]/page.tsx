import { getMovieDetail } from '@/shared/hooks/useMovie';
import MovieDetailPage from './movieDetailPage';
import ScrollToTop from '@/components/scroll-to-top/scroll-to-top';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function MovieDetail({ params }: Props) {
  const { id } = await params;
  const movieDetail = await getMovieDetail(id);
  return (
    <section className="my-5">
      <div className="container">
        <ScrollToTop />
        <MovieDetailPage movieDetail={movieDetail} />
      </div>
    </section>
  );
}
