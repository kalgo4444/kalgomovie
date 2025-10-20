import CustomImage from '@/components/image/custom-image';
import { IMovieDetail } from '@/shared/interface/movieDetail.interface';
import Title from '../title/title';
import { timeConverter } from '@/shared/helper/time.converter';
import Link from 'next/link';

interface IProps {
  movieDetail: IMovieDetail;
}

export default function MovieDetail(props: IProps) {
  const { movieDetail } = props;
  console.log(movieDetail);
  return (
    <div className="my-5 flex flex-col md:flex-row gap-x-5">
      <div className="w-full md:w-1/2">
        <CustomImage
          link={movieDetail.poster_path}
          title={movieDetail.title}
          className="black mx-auto h-[50vh]"
        />
      </div>
      <div className="w-full md:w-1/2">
        <div>
          <Title title={movieDetail.title} />
          <b>{movieDetail.original_title}</b>
        </div>
        <p className="text-sm md:text-base">{movieDetail.overview}</p>
        <ul className="my-2">
          <li>
            <b>Tagline</b>: {movieDetail.tagline}
          </li>
          <li>
            <b>Status</b>: {movieDetail.status}
          </li>
          <li>
            <b>Release Date</b>: {movieDetail.release_date}
          </li>
          <li>
            <b>Language</b>: {movieDetail.original_language.toLocaleUpperCase()}
          </li>
          <li>
            <b>Country</b>:{' '}
            {movieDetail.origin_country.map((item, inx: number) => (
              <b key={inx}> {item} </b>
            ))}
          </li>
          <li>
            <b>Popularity</b>: {movieDetail.popularity.toFixed(0)}
          </li>
          <li>
            <b>Vote</b>: {movieDetail.vote_count.toFixed(0)} count
          </li>
          <li>
            <b>Rating</b>: {movieDetail.vote_average.toFixed(0)} IMDB
          </li>

          {movieDetail.budget !== 0 && (
            <li>
              <b>Budget</b>: {movieDetail.budget.toLocaleString()}$
            </li>
          )}

          <li className="space-x-2 flex items-center flex-wrap">
            <b>Spoken Language:</b>
            {movieDetail.spoken_languages.map((item, inx: number) => (
              <span key={inx}> {`${item.english_name},`} </span>
            ))}
          </li>
          <li className="space-x-2 flex items-center flex-wrap">
            <b>Genres:</b>
            {movieDetail.genres.map((item, inx: number) => (
              <span
                className="bg-gray-600 py-0.5 px-1 text-center rounded-md text-white"
                key={inx}
              >
                {' '}
                {item.name}{' '}
              </span>
            ))}
          </li>
          <li className="space-x-2 flex items-center flex-wrap">
            <b>Companies:</b>
            {movieDetail.production_companies.map((item, inx: number) => (
              <span key={inx}> {`${item.name},`} </span>
            ))}
          </li>
          <li>
            <b>Runtime</b>: {timeConverter(movieDetail.runtime)}
          </li>
          <li>
            <b>Home page</b>:{' '}
            <Link href={movieDetail.homepage ? movieDetail.homepage : ''}>
              Link
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
