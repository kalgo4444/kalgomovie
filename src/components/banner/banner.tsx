import { IMovie } from '@/shared/interface/movie.interface';
import Title from '../title/title';
import CustomImage from '../image/custom-image';
import FadeAnimation from '../animation/fade-animation';
import Link from 'next/link';
import { Button } from '../ui/button';
import SeparatorElement from '../separator/separator';
import { IMovieDetail } from '@/shared/interface/movieDetail.interface';

interface IProps {
  movie: IMovie | IMovieDetail;
  title?: boolean;
  detail?: boolean;
}

export default function Banner(props: IProps) {
  const { movie, detail, title } = props;
  return (
    <div className="relative">
      {title && (
        <Title title="Last Coming..." link="/movie" label="More Movie" />
      )}
      <FadeAnimation>
        <div
          className={`max-w-7xl w-full mx-auto relative ${!detail && 'hidden md:block'}`}
        >
          <CustomImage
            link={movie.backdrop_path}
            title={movie.title}
            className="w-full h-[65vh]"
          />

          <div className="absolute z-10 inset-0 bg-gradient-to-t from-black/95 to-transparent rounded-b-md" />
        </div>
        {detail && (
          <div className="absolute text-white z-20 bottom-10 left-1/2 -translate-x-1/2 max-w-xl w-full text-center flex flex-col gap-y-2 items-center">
            <Title title={movie.title} />
            <SeparatorElement movie={movie} />
            <Link
              className="max-w-[200px] w-full h-12 block mt-1"
              href={`/movie/${movie.id}`}
            >
              <Button
                className="max-w-[150px] md:max-w-[200px] w-full h-full text-base md:text-lg font-semibold"
                variant={'secondary'}
              >
                Show movie
              </Button>
            </Link>
          </div>
        )}
      </FadeAnimation>
    </div>
  );
}
