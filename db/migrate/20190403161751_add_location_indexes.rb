class AddLocationIndexes < ActiveRecord::Migration[5.2]
  def change
    add_index :events, :venue_name
    add_index :events, :city
    add_index :events, :state
    add_index :events, :zip
  end
end
