import CryptoJS from "crypto-js";

import getCurrentPathName from "../lib/get-current-pathname";
import { userNumberKey, passwordKey } from "../lib/constans";

export default () => {
  if (getCurrentPathName() != "/osakashi/Welcome.cgi") { return; }

  const params = new URL(window.location.href).searchParams;
  const userNumber = getDecryptedData(params.get("n"), userNumberKey);
  const password = getDecryptedData(params.get("p"), passwordKey);

  document.getElementById("txtRiyoshaCode").value = userNumber
  document.getElementById("txtPassWord").value = password

  setInterval(() => document.querySelector(".loginbtn > a").click(), 2000)
}

const getDecryptedData = (data, key) => {
  let decryptedData;
  for (let i = 0; i <= 2; i++) {
    decryptedData = CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
    if (decryptedData) { return decryptedData; }
  }
}
