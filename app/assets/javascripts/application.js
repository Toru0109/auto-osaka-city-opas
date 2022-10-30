// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery
//= require jquery_ujs

const isUserNameValid = (userNameId) => {
  const userName = document.getElementById(userNameId).value;
  if (userName.length <= 0) {
    Swal.fire({ icon: 'error', text: 'ユーザー名を入力してください。' });
    return false;
  }
  if (userName.length > 15) {
    Swal.fire({ icon: 'error', text: 'ユーザー名は15文字以内で入力してください。' });
    return false;
  }

  return true;
}

const isUserNumberValid = (userNumberId) => {
  const userNumber = document.getElementById(userNumberId).value;
  if (userNumber.length <= 0) {
    Swal.fire({ icon: 'error', text: '利用者番号を入力してください。' });
    return false;
  }
  if (userNumber.length > 8) {
    Swal.fire({ icon: 'error', text: '利用者番号は8文字以内で入力してください。' });
    return false;
  }
  if (!(userNumber.match(/^[0-9]+$/))) {
    Swal.fire({ icon: 'error', text: '利用者番号には半角数字で入力してください。' });
    return false;
  }

  return true;
}

const isPasswordValid = (passwordId, labelName) => {
  const password = document.getElementById(passwordId).value;
  if (password.length <= 0) {
    Swal.fire({ icon: 'error', text: `${labelName}を入力してください。` });
    return false;
  }
  if (password.length > 8) {
    Swal.fire({ icon: 'error', text: `${labelName}は8文字以内で入力してください。` });
    return false;
  }

  return true;
}

const checkSignUp = () => {
  if (!isUserNameValid('user_user_name')) { return false; }

  if (!isUserNumberValid('user_user_number')) { return false; }

  if (!isPasswordValid('user_password', 'パスワード')) { return false; }

  if (!isPasswordValid('user_password_confirmation', 'パスワード（確認用）')) { return false; }

  return true;
}

const checkSignIn = () => {
  if (!isUserNumberValid('session_user_number')) { return false; }

  if (!isPasswordValid('session_password', 'パスワード')) { return false; }

  return true;
}

const getCsrfToken = () => {
  return document.querySelector('meta[name="csrf-token"]').content;
}

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

const confirmAccountDeletion = () => {
  Swal.fire({
    text: "アカウントを削除します。よろしいですか？",
    icon: 'warning',
    confirmButtonText: '削除',
    showCancelButton: true,
    cancelButtonColor: '#d33',
    cancelButtonText: 'キャンセル'
  }).then((result) => {
    if (!result.isConfirmed) { return; }
    deleteAccount();
  })
}

const deleteAccount = () => {
  $.ajax({
    type: 'DELETE',
    url: '/user',
    headers: {
      'X-CSRF-Token': getCsrfToken()
    }
  });
}
