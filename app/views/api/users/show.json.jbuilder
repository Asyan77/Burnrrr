
json.user do
    json.extract! @user, :id, :username, :created_at
end
# @photos.each do |photo|

# json.set! photo.id do
#     if photo.user_id != @user
#       next
#     end
#     json.partial! 'photo', photo: photo
#   end 
# end

# json.photo_url tea.photos.attached? url_for (@user.photos) : nil