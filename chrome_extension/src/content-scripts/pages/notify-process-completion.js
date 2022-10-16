import getCurrentPathName from "../lib/get-current-pathname";

export default () => {
  if (getCurrentPathName() != "/osakashi/yoyaku/ShisetsuMultiSelect.cgi") { return; }

  alert("処理が正常に終了しました。");
}
