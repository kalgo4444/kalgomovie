'use client';

import Card from '@/components/card/card';
import SelectFilter from '@/components/movie-filter/select-filter';
import { movieSort } from '@/shared/const/movie-sort-select';
import { movieGenresSelect } from '@/shared/helper/select-data';
import { useMovie } from '@/shared/hooks/useMovie';
import { IResMovie } from '@/shared/interface/movie.interface';
import { useState } from 'react';

export default function MoviePage() {
  const [genres, setGenres] = useState<string>('');
  const [sort, setSort] = useState<string>('popularity.desc');
  const { useMovieQuery, useMovieItem } = useMovie();
  const { data, isLoading } = useMovieQuery<IResMovie>('/discover/movie', {
    with_genres: genres,
    sort_by: sort,
  });
  const { data: movieGenres } = useMovieItem('/genre/movie/list');

  return (
    <section className="my-5">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-y-5 gap-x-5">
          <SelectFilter
            setValue={setGenres}
            placeholder="Genres"
            data={movieGenresSelect(movieGenres?.genres)}
          />
          <SelectFilter
            setValue={setSort}
            placeholder="Sort by"
            data={movieSort}
            defaultValue="popularity.desc"
          />
        </div>
        <Card movie={data?.results} isLoading={isLoading} />
        <div></div>
      </div>
    </section>
  );
}
