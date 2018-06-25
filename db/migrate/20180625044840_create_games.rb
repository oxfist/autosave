class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :title
      t.integer :release_year
      t.text :comment
      t.string :image

      t.timestamps
    end
  end
end
