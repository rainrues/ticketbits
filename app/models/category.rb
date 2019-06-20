class Category < ApplicationRecord
    validates :name, null: false

    has_many :categorizations
    
    has_many :events, through: :categorizations    
end