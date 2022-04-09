class CreateAutomationSettings < ActiveRecord::Migration[5.2]
  def change
    create_table :automation_settings do |t|
      t.references :user, foreign_key: true, type: :int
      t.integer :sports_type, null: false, default: 0
      t.string :facility_types, limit: 256, null: false, default: ''

      t.timestamps
    end
  end
end
