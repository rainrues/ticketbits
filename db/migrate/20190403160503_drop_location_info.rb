class DropLocationInfo < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :location
    remove_column :events, :location_id
  end
end
