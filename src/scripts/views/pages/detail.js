import UrlParser from "../../routes/url-parser";
import TheMovieDbSource from "../../data/themoviedb-source";

const Detail = {
  async render() {
    return `
          <div id="movie" class="movie"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    console.log(movie);

    // TODO: tampilkan movie di dalam DOM
  },
};

export default Detail;
