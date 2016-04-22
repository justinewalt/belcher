class CreateRecents < ActiveRecord::Migration
  def change
    create_table :recents do |t|
      t.string :name
      t.string :address
      t.integer :price
      t.float :rating
      t.string :picture
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
