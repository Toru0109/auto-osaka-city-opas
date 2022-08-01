class AutomationSettingsController < ApplicationController
  before_action :logged_in_user
  before_action :set_automation_setting, only: [:show, :edit, :update, :execute]

  def index
    @search_keyword = params[:search_keyword].to_s
    @automation_settings = AutomationSetting.where(user_id: @current_user.id)
    @automation_settings = @automation_settings.where("name LIKE ?", "%#{@search_keyword}%") if @search_keyword.present?

    @sort_name_order = sort_params
    @automation_settings = @sort_name_order ? @automation_settings.order(@sort_name_order) : @automation_settings.order('id asc')

    @automation_settings = @automation_settings.page(params[:page])
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
    automation_settings = AutomationSetting.where(
      id: params[:automation_setting_ids],
      user_id: session[:user_id]
    )

    automation_settings.delete_all
    flash[:success] = '設定を削除しました。'
    redirect_to automation_settings_path
  end

  def execute
    render status: :not_found and return unless @automation_setting

    OsakaCityOpasOperateWorker.perform_at(3.second, @automation_setting.user_id, @automation_setting.id)
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
    @automation_setting = AutomationSetting.find_by!(
      id: params[:id],
      user_id: session[:user_id]
    )
  end

  def automation_setting_params
    params.require(:automation_setting).permit(:name, :sports_type, { facility_types: [] })
  end

  def sort_params
    %w[name.asc name.desc sports_type.asc sports_type.desc].include?(params[:sort]) ? params[:sort].split('.').join(' ') : nil
  end
end
