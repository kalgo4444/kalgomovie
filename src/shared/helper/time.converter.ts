export const timeConverter = (time: number | null) => {
  if (time !== null) {
    const runtime = String((time / 60).toFixed(2)).split('.');
    return `${runtime[0]}h ${runtime[1]} min.`;
  }
};
