
json.user do
    json.extract! @user, :id, :username, :created_at
end

# json.photo_url tea.photos.attached? url_for (@user.photos) : nil