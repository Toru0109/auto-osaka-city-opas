class UsersController < ApplicationController
  before_action :logged_in_user, only: [:edit, :update, :destroy, :change_password, :update_password, :login_info]

  def create
    if user_params[:password] != user_params[:password_confirmation]
      flash[:error] = 'パスワードがパスワード（確認用）と一致しません。'
      redirect_to root_path and return
    end

    user = User.new(user_params)
    if user.save
      flash[:success] = '会員登録が完了しました。'
      session[:user_id] = user.id
      redirect_to automation_settings_path
    else
      flash[:error] = user.errors.full_messages
      redirect_to root_path
    end
  end

  def edit
  end

  def update
    if current_user.update_attributes(user_params)
      flash[:success] = 'ユーザー情報を更新しました。'
      redirect_to automation_settings_path
    else
      flash.now[:error] = current_user.errors.full_messages
      render :edit
    end
  end

  def destroy
    current_user.destroy
    session.delete(:user_id)
    flash[:success] = "アカウントを削除しました。"
    redirect_to root_path
  end

  def change_password
  end

  def update_password
    if current_user.decrypted_password != params[:current_password]
      flash.now[:error] = '現在のパスワードが間違っています。'
      render :change_password and return
    end

    if params[:new_password] != params[:new_password_confirmation]
      flash.now[:error] = '新しいパスワードが新しいパスワード(確認用)と一致しません。'
      render :change_password and return
    end

    current_user.password = params[:new_password]
    if current_user.save
      flash[:success] = 'パスワードを更新しました。'
      redirect_to automation_settings_path
    else
      flash.now[:error] = current_user.errors.full_messages
      render :change_password
    end
  end

  def login_info
    render json: { user_number: current_user.user_number, password: current_user.decrypted_password }, status: :ok
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :user_number, :password, :password_confirmation)
  end
end
