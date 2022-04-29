class OsakaCityOpasOperateWorker
  include Sidekiq::Worker

  def perform(user_id, automation_setting_id)
    operator = OsakaCityOpasOperator.new(user_id, automation_setting_id)
    operator.display_availability
  end
end
