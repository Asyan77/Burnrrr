class Photo < ApplicationRecord
    validates :title, :user_id, presence: true
    has_one_attached :photo


    # belongs_to :user

     # has_many: comments
    # dependent: :destroy
end
