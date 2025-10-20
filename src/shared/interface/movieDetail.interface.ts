/**
 * Interface for the production company details.
 */
export interface IProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

/**
 * Interface for the production country details.
 */
interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

/**
 * Interface for the spoken language details.
 */
interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

/**
 * Interface for the genre details.
 */
interface Genre {
  id: number;
  name: string;
}

/**
 * Interface for the movie collection details.
 */
interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
}

/**
 * The main interface for the movie data object.
 */
export interface IMovieDetail {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: BelongsToCollection | null;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: IProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
