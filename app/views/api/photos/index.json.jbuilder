 @photos.each do |photo|

    json.set! photo.id do
      json.partial! 'photo', photo: photo
    end 
    
  end
  
  
      # json.users do
      #   json.set! photo.user_id do
      #     json.extract! photo.user, :id, :username 
      #   end
      # end


# @photos.each do |userPhoto|

#   json.set! userPhoto.id do
#     if photo.user_id != 4
#       next
#     end
#     json.partial! 'photo', photo: userPhoto
# end 
        
      # end