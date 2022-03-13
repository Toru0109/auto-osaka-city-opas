const togglePassword = (eyeIcon) => {
  const passwordInput = eyeIcon.previousElementSibling;
  let type = 'password';
  let beforeClass = 'fa-eye-slash';
  let afterClass = 'fa-eye';

  if (passwordInput.type == 'password') {
    type = 'text';
    beforeClass = 'fa-eye';
    afterClass = 'fa-eye-slash';
  }
  passwordInput.type = type;
  eyeIcon.classList.replace(beforeClass, afterClass);
}
