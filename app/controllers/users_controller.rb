class UsersController < ApplicationController
  def create
    if User.exists?(user_number: params[:user][:user_number])
      flash[:danger] = '会員登録に失敗しました。'
      return redirect_to root_path
    end

    user = User.new(user_params)
    if user.save
      flash[:success] = '会員登録が完了しました。'
      session[:user_id] = user.id
      redirect_to automation_settings_path
    else
      flash[:danger] = user.errors.full_messages
      redirect_to root_path
    end
  end

  def edit
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :user_number, :password, :password_confirmation)
  end
end
