class ChangeLengthForPasswordDigest < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :password_digest, :string, null: false, default: '', limit: 256
  end
end
