class DropUser < ActiveRecord::Migration[5.2]
  def change
    # drop_table :users
    add_column :users, :user_name, :string
  end
end
