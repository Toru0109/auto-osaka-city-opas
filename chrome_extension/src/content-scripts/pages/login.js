import getCurrentPathName from "../lib/get-current-pathname";

export default () => {
  if (getCurrentPathName() != "/osakashi/Welcome.cgi") { return; }

  const params = new URL(window.location.href).searchParams;

  document.getElementById("txtRiyoshaCode").value = params.get("n");
  document.getElementById("txtPassWord").value = params.get("p");

  setInterval(() => document.querySelector(".loginbtn > a").click(), 2000)
}
