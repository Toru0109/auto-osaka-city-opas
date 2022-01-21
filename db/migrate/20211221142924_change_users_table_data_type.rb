class ChangeUsersTableDataType < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :user_number, :string, null: false, default: '', limit: 256
    change_column :users, :password, :string, null: false, default: '', limit: 256
  end
end
