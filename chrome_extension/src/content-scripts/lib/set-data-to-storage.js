import getCurrentPathName from "./get-current-pathname";

export default () => {
  if (getCurrentPathName() != "/osakashi/Welcome.cgi") { return; }

  const params = new URL(window.location.href).searchParams;
  chrome.storage.local.set({
    "sports": params.get("sports"),
    "facilities": params.get("facilities")
  });
}
