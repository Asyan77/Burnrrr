json.photo do
    json.extract! @comment.photo, :id, :title, :description
  end

  json.user do
    json.extract! @comment.author, :id, :username 
  end