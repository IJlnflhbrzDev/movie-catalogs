import NowPlaying from "../views/pages/now-playing";
import Upcomming from "../views/pages/upcomming";
import Detail from "../views/pages/detail";

const routes = {
  "/": NowPlaying,
  "/now-playing": NowPlaying,
  "/upcomming": Upcomming,
  "/detail/:id": Detail,
};

export default routes;
