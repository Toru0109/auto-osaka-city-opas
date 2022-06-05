const checkUserValues = () => {
  if (!isUserNameValid('user_name')) { return false; }

  if (!isUserNumberValid('user_number')) { return false; }

  return true;
}

const checkPasswords = () => {
  if (!isPasswordValid('current_password', '現在のパスワード')) {
    return false;
  }

  if (!isPasswordValid('new_password', '新しいパスワード')) {
    return false;
  }

  if (!isPasswordValid('new_password_confirmation', '新しいパスワード（確認用）')) {
    return false;
  }

  return true;
}
