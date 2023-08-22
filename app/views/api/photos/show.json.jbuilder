@photos.each do |photo|

  json.set! photo.id do
    json.partial! 'photo', photo: photo
  end 
  
end


# json.partial! 'photo', photo: @photo

# json.user do
#     json.extract! @photo.user, :id, :username 
#   end