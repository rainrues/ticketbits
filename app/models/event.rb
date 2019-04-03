class Event < ApplicationRecord
    validates :start_date, :end_date, :title, :start_time, :end_time, :age, :price, :location, :num_tickets, :user_id, null: false
end