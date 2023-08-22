class Comment < ApplicationRecord
    validates :body, :author_id, :photo_id, presence: true


    belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: 'User'

    belongs_to :photo

end