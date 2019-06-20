class CreateTable < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :name, null: false
      
      t.timestamps
    end

    create_table :categorizations do |t|
      t.integer :event_id, null: false
      t.integer :category_id, null: false
      t.timestamps
    end

    add_index :categories, :name
    add_index :categorizations, :event_id
    add_index :categorizations, :category_id
  end
end
