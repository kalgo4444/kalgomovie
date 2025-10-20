import { IMovie } from '@/shared/interface/movie.interface';
import { Separator } from '../ui/separator';
import { IMovieDetail } from '@/shared/interface/movieDetail.interface';

interface IProps {
  movie: IMovie | IMovieDetail;
  blockCenter?: boolean;
  className?: string;
}

export default function SeparatorElement(props: IProps) {
  const { movie, blockCenter, className } = props;
  return (
    <div
      className={`flex h-5 items-center space-x-2 sm:space-x-4 text-sm md:text-base ${blockCenter && 'block mx-auto'} ${className}`}
    >
      <div>{movie.original_language.toUpperCase()}</div>
      <Separator className="bg-white" orientation="vertical" />
      <div>{movie.release_date.split('-')[0]}</div>
      <Separator className="bg-white" orientation="vertical" />
      <div>IMDB: {movie.vote_average.toFixed(0)}</div>
    </div>
  );
}
