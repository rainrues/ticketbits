class AddLocationInfo < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :venue_name, :string, null: false 
    add_column :events, :address, :string, null: false 
    add_column :events, :address2, :string
    add_column :events, :city, :string, null: false 
    add_column :events, :state, :string, null: false 
    add_column :events, :country, :string, null: false 
    add_column :events, :zip, :integer, null: false 
  end
end