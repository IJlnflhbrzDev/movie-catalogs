/*

     INI ADALAH FILE ENTRII POINT => Lebih Jelas nya silahkan cek ulang materi pada FUNDAMENTAL WEB FRONT END

*/
import "regenerator-runtime";
import "../style/style.css";
import "../style/responsive.css";
import App from "./views/app";
import swRegister from "./utils/sw-register";
import WebSocketInitiator from "./views/templates/websocket-intiator";
import CONFIG from "./globals/config";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
