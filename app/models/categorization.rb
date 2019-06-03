class Categorization < ApplicationRecord
    validates :event_id, :category_id, null: false

    belongs_to :event
    belongs_to :categorie
end