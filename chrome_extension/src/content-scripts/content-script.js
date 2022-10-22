import setDataToStorage from "./lib/set-data-to-storage";
import login from "./pages/login";
import clickAvailabilityInquiry from "./pages/click-availability-inquiry";
import clickInquiryMethod from "./pages/click-inquiry-method";
import clickMainCategory from "./pages/click-main-category";
import clickSubCategoryAndFacilities from "./pages/click-sub-category-and-facilities";
import notifyProcessCompletion from "./pages/notify-process-completion";

try {
  window.addEventListener('load', () => {
    setDataToStorage();
    login();
    clickAvailabilityInquiry();
    clickInquiryMethod();
    clickMainCategory();
    clickSubCategoryAndFacilities();
    notifyProcessCompletion();
  })
} catch {
  alert('エラーが発生しました。再度処理をやり直してください。');
}
