class CreatePhotos < ActiveRecord::Migration[7.0]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.string :description
      t.references :user, foreign_key: true, null: false 
      t.timestamps
    end
    # add_index :photos, :user_id, unique: true
  end
end
