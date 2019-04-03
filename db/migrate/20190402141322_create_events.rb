class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.integer :start_date, null: false
      t.integer :end_date, null: false
      t.string :title, null: false
      t.integer :start_time, null: false
      t.integer :end_time, null: false
      t.integer :age, null: false
      t.integer :low_price
      t.integer :price, null: false
      t.string :location, null: false
      t.text :about
      t.integer :num_tickets, null:false
      t.string :image_url
      t.integer :location_id
      t.integer :user_id, null: false
      
      t.timestamps
    end
    add_index :events, :start_date
    add_index :events, :title
    add_index :events, :age
    add_index :events, :low_price
    add_index :events, :price
    add_index :events, :location
    add_index :events, [:start_date, :title, :location], unique: true
  end
end
