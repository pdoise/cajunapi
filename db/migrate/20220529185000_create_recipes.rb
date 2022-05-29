class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :description
      t.string :ingredients
      t.string :imgsrc
      t.string :directions
      t.integer :rating
      t.integer :cooktime

      t.references :user, null: false, foreign_key:true

      t.timestamps
    end
  end
end
