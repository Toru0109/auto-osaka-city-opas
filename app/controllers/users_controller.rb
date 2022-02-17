class UsersController < ApplicationController
  layout 'authenticate'

  def new
    @user = User.new
    flash.now[:danger] = [
      '吉川テスト',
      '吉川テスト1'
    ]
  end

  def create
    user = User.new(user_params)
    if user.save
      flash[:success] = '会員登録が完了しました。'
      redirect_to automation_settings_path
    else
      flash.now[:danger] = user.errors.full_messages
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :user_number, :password, :password_confirmation)
  end
end
