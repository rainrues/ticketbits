class Event < ApplicationRecord
    validates :start_date, :end_date, :title, :start_time, :end_time, :age, :price, :num_tickets, :user_id, :venue_name, :address, :city, :state, :country, :zip, null: false

    belongs_to :user
    has_many :categorizations

    has_many :categories, through: :categorizations 
end