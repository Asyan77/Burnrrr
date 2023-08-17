class Photo < ApplicationRecord
    validates :title, :user_id, presence: true
    has_one_attached :photo
end
