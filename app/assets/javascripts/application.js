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

const signUpCheck = () => {
  const userName = document.getElementById('user_user_name').value;
  if (userName.length <= 0) {
    Swal.fire({ icon: 'error', text: 'ユーザー名を入力してください。' });
    return false;
  }
  if (userName.length > 15) {
    Swal.fire({ icon: 'error', text: 'ユーザー名は15文字以内で入力してください。' });
    return false;
  }

  const userNumber = document.getElementById('user_user_number').value;
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

  const password = document.getElementById('user_password').value;
  if (password.length <= 0) {
    Swal.fire({ icon: 'error', text: 'パスワードを入力してください。' });
    return false;
  }
  if (password.length > 8) {
    Swal.fire({ icon: 'error', text: 'パスワードは8文字以内で入力してください。' });
    return false;
  }

  const passwordConfirmation = document.getElementById('user_password_confirmation').value;
  if (passwordConfirmation.length <= 0) {
    Swal.fire({ icon: 'error', text: 'パスワード（確認用）を入力してください。' });
    return false;
  }
  if (passwordConfirmation.length > 8) {
    Swal.fire({ icon: 'error', text: 'パスワード（確認用）は8文字以内で入力してください。' });
    return false;
  }

  if (!(password == passwordConfirmation)) {
    Swal.fire({ icon: 'error', text: 'パスワードが確認用パスワードと一致しません。' });
    return false;
  }

  return true;
}

const signInCheck = () => {
  const userNumber = document.getElementById('user_number').value;
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

  const password = document.getElementById('password').value;
  if (password.length <= 0) {
    Swal.fire({ icon: 'error', text: 'パスワードを入力してください。' });
    return false;
  }
  if (password.length > 8) {
    Swal.fire({ icon: 'error', text: 'パスワードは8文字以内で入力してください。' });
    return false;
  }

  return true;
}

const getCsrfToken = () => {
  return document.querySelector('meta[name="csrf-token"]').content;
}

const confirmLogOut = () => {
  Swal.fire({
    text: "ログアウトしますか？",
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK',
    showCancelButton: true,
    cancelButtonColor: '#d33',
    cancelButtonText: 'キャンセル'
  }).then((result) => {
    if (!result.isConfirmed) { return; }
    logOut();
  })
}

const logOut = () => {
  $.ajax({
    type: 'DELETE',
    url: '/sign_out',
    headers: {
      'X-CSRF-Token': getCsrfToken()
    }
  });
}
