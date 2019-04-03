class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :start_date, :date, null: false 
    add_column :events, :end_date, :date, null: false 
    add_column :events, :start_time, :time, null: false 
    add_column :events, :end_time, :time, null: false 

    add_index :events, :start_date
  end
end
