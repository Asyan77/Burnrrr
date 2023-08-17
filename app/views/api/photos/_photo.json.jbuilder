json.extract! post, :id, :title
json.photoUrl post.photo.attached? ? post.photo.url : nil