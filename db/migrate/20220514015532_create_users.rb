class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first
      t.string :last
      t.string :email
      t.string :location
      t.string :bio
      t.string :avatar
      t.string :password_digest
      t.string :facebook_id

      t.timestamps
    end
  end
end
