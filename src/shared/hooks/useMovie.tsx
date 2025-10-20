import { useQuery } from '@tanstack/react-query';
import { IMovieDetail } from '../interface/movieDetail.interface';
import movieService from '../services/movie.service';
import { movieKey } from '../const/query-key';
import { IMovieParams } from '../interface/movieParams.inerface';
import { API } from '../api';

export const getMovie = async <T,>(endpoint: string) => {
  const response: T = await movieService.getMovie(endpoint);
  return response;
};

export const getMovieDetail = async <T,>(id: string) => {
  const response: T = await movieService.getDetail(id);
  return response as IMovieDetail;
};

export const useMovie = () => {
  const useMovieQuery = <T,>(endpoint: string, params?: IMovieParams) =>
    useQuery({
      queryKey: [movieKey, params],
      queryFn: () => API.get<T>(endpoint, { params }),
      select: (data) => data.data,
      gcTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 30,
    });

  const useMovieItem = (endpoint: string) =>
    useQuery({
      queryKey: ['movie-item'],
      queryFn: () => API.get(endpoint),
      select: (data) => data.data,
      gcTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 30,
    });

  return { useMovieQuery, useMovieItem };
};
