class AddImageToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :image, :string, null: false, default: '', limit: 256
  end
end
