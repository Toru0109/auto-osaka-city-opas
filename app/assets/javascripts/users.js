const checkUserValues = () => {
  if (!isUserNameValid('user_name')) { return false; }

  if (!isUserNumberValid('user_number')) { return false; }

  if (!isPasswordValid('password')) { return false; }

  if (!isPasswordConfirmationValid('password_confirmation')) { return false; }

  if (!isPasswordEqualToPasswordConfirmation('password', 'password_confirmation')) { return false; }

  return true;
}
