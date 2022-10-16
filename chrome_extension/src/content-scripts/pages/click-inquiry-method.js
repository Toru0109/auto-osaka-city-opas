import getCurrentPathName from "../lib/get-current-pathname";

export default () => {
  if (getCurrentPathName() != "/osakashi/menu/Menu.cgi") { return; }

  document.querySelector("table a:first-of-type").click();
}
