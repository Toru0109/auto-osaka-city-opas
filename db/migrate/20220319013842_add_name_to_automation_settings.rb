class AddNameToAutomationSettings < ActiveRecord::Migration[5.2]
  def change
    add_column :automation_settings, :name, :string, null: false, default: '', limit: 30
  end
end
