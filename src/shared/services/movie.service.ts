import { BASE_URL, MOVIE_KEY } from '../api';

class MovieService {
  async getMovie(endpoint: string) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      next: { revalidate: 60 * 60 * 12 },
      method: 'GET',
      headers: {
        Authorization: `Bearer ${MOVIE_KEY}`,
      },
    });
    const data = response.json();
    return data;
  }

  async getDetail(id: string) {
    const response = await fetch(`${BASE_URL}/movie/${id}`, {
      next: { revalidate: 60 * 60 * 12 },
      method: 'GET',
      headers: {
        Authorization: `Bearer ${MOVIE_KEY}`,
      },
    });
    const data = response.json();
    return data;
  }
}

const movieService = new MovieService();
export default movieService;
