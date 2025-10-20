import Banner from '@/components/banner/banner';
import MovieDetail from '@/components/movie-detail/movie-detail';
import { IMovieDetail } from '@/shared/interface/movieDetail.interface';

interface IProps {
  movieDetail: IMovieDetail;
}

export default function MovieDetailPage(props: IProps) {
  const { movieDetail } = props;
  return (
    <div>
      <Banner movie={movieDetail} />
      <MovieDetail movieDetail={movieDetail} />
    </div>
  );
}
