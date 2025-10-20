import FadeAnimation from '@/components/animation/fade-animation';
import CustomImage from '@/components/image/custom-image';
import SeparatorElement from '@/components/separator/separator';
import Title from '@/components/title/title';
import { IMovie } from '@/shared/interface/movie.interface';
import Link from 'next/link';

export default function CardItem({ movie }: { movie: IMovie[] | undefined }) {
  return (
    <div className="grid  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-5">
      {movie?.map((item) => (
        <FadeAnimation key={item.id}>
          <div className="bg-card rounded-md">
            <Link href={`/movie/${item.id}`}>
              <div className="w-full h-[30vh] sm:h-[40vh] md:h-[40vh] lg:h-[50vh] relative overflow-hidden">
                {item.poster_path ? (
                  <CustomImage
                    link={item.poster_path}
                    title={item.title}
                    className="w-full h-full bg-cover hover:scale-105 duration-200"
                  />
                ) : (
                  <div className="w-full h-full bg-cover hover:scale-105 duration-200 grid place-items-center">
                    Image not found
                  </div>
                )}
              </div>
            </Link>
            <div className="px-2 pb-2 flex items-center justify-between">
              <div>
                <Title
                  title={item.title}
                  className="line-clamp-1 max-sm:text-sm"
                />
                <SeparatorElement movie={item} blockCenter />
              </div>
            </div>
          </div>
        </FadeAnimation>
      ))}
    </div>
  );
}
