class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      flash[:success] = '会員登録が完了しました。'
      redirect_to automation_settings_path
    else
      flash[:danger] = user.errors.full_messages
      redirect_to root_path
    end
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :user_number, :password, :password_confirmation)
  end
end
