class AutomationSettingsController < ApplicationController
  before_action :logged_in_user, only: [:index]
  before_action :check_automation_setting_owner, only: [:edit]
  before_action :set_automation_setting, only: [:edit, :update, :destroy, :execute]

  def index
    @automation_settings = AutomationSetting
      .where(user_id: @current_user.id)
      .order(:id)

    if params[:search_keyword].present?
      @automation_settings = @automation_settings.where("name LIKE ?", "%#{params[:search_keyword]}%")
    end
  end

  def new
  end

  def show

  end

  def create
    automation_setting = AutomationSetting.new(
      user_id: session[:user_id],
      name: automation_setting_params[:name],
      sports_type: automation_setting_params[:sports_type],
      facility_types: automation_setting_params[:facility_types].join(',')
    )
    if automation_setting.save
      flash[:success] = '登録に成功しました。'
      redirect_to automation_settings_path
    else
      flash.now[:error] = automation_setting.errors.full_messages
      render :new
    end
  end

  def edit
  end

  def update
    @automation_setting.name = automation_setting_params[:name]
    @automation_setting.sports_type = automation_setting_params[:sports_type]
    @automation_setting.facility_types = automation_setting_params[:facility_types].join(',')

    if @automation_setting.save
      flash[:success] = '更新に成功しました。'
      redirect_to automation_settings_path
    else
      flash.now[:error] = @automation_setting.errors.full_messages
      render :edit
    end
  end

  def destroy
    @automation_setting.destroy
    head :ok
  end

  def execute
    render status: :not_found and return unless @automation_setting

    OsakaCityOpasOperateWorker.perform_at(3.second, session[:user_id], params[:id])
    render status: :accepted
  rescue => ex
    p '==============='
    p ex.class
    p ex.message
    p ex.backtrace
    p '==============='

    # DB接続エラー
    render status: :internal_server_error
  end

  private

  def set_automation_setting
    @automation_setting = AutomationSetting.find_by(
      id: params[:id],
      user_id: session[:user_id]
    )
  end

  def automation_setting_params
    params.require(:automation_setting).permit(:name, :sports_type, { facility_types: [] })
  end

  def check_automation_setting_owner
    automation_setting = AutomationSetting.find_by(id: params[:id])
    redirect_to root_path if !automation_setting || automation_setting.user.id != session[:user_id]
  end
end
