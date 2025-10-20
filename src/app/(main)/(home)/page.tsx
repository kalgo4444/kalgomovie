import Banner from '@/components/banner/banner';
import Card from '@/components/card/card';
import { getMovie } from '@/shared/hooks/useMovie';
import { IResMovie } from '@/shared/interface/movie.interface';

export default async function HomePage() {
  const movie = await getMovie<IResMovie>('/discover/movie');
  console.log(movie);
  return (
    <section className="py-4">
      <div className="container">
        <Banner movie={movie.results[0]} title detail />
        <Card
          movie={movie.results}
          title={{ title: 'Movie', label: 'More movie', link: '/movie' }}
        />
      </div>
    </section>
  );
}
