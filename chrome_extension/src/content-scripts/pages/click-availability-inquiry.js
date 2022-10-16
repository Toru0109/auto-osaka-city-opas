import getCurrentPathName from "../lib/get-current-pathname";

export default () => {
  if (getCurrentPathName() != "/osakashi/menu/Login.cgi") { return; }

  document.querySelector(".bgpng").click();
}
