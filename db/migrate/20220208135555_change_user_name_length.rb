class ChangeUserNameLength < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :user_name, :string, null: false, default: '', limit: 15
  end
end
