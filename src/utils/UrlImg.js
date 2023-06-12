export function UrlImg(data) {
  return data
    ? `https://image.tmdb.org/t/p/w500/${data}`
    : 'https://via.placeholder.com/395x574?text=No+Image';
}
export function UrlBgImg(data) {
  return data
    ? `https://image.tmdb.org/t/p/1280/${data}`
    : 'https://via.placeholder.com/395x574?text=No+Image';
}
