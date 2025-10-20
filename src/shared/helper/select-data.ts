export const movieGenresSelect = (genres: { id: number; name: string }[]) => {
  const movieGenres = genres?.map((genre: { id: number; name: string }) => ({
    value: genre.id,
    label: genre.name,
  }));
  return movieGenres;
};
