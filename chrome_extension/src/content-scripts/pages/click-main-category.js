import getCurrentPathName from "../lib/get-current-pathname";
import { CATEGORY_IDS_TABLE } from "../lib/constans";

export default () => {
  if (getCurrentPathName() != "/osakashi/yoyaku/QueryMethodSelect.cgi") { return; }

  chrome.storage.local.get("sports", (data) => {
    const id = CATEGORY_IDS_TABLE[data["sports"]]["categoryId"];
    document.getElementById(id).click();
  })
}
