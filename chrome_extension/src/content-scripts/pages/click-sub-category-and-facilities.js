import getCurrentPathName from "../lib/get-current-pathname";
import { CATEGORY_IDS_TABLE, FACILITIES_TABLE } from "../lib/constans";

export default () => {
  if (getCurrentPathName() != "/osakashi/yoyaku/GenreSelect.cgi") { return; }

  if (document.querySelector("div.title").textContent == "施設絞り込み（場所選択）") {
    checkFacilities();
    return;
  }

  chrome.storage.local.get("sports", (data) => {
    const id = CATEGORY_IDS_TABLE[data["sports"]]["subCategoryId"];
    document.getElementById(id).click();
  })
}

const checkFacilities = () => {
  let id = "";
  chrome.storage.local.get("sports", (data) => {
    const sports = data["sports"];
    chrome.storage.local.get("facilities", (data) => {
      data["facilities"].split(",").forEach((facility) => {
        id = FACILITIES_TABLE[sports][facility];
        document.getElementById(id).parentNode.click();
      })
    })
  })

  setInterval(() => document.querySelector("#pagerbox > a:last-of-type").click(), 1000)
}


