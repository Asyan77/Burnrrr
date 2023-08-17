class Api::PhotosController < ActionController::API
    def index
      @photos = Photo.all.sort { |a,b| b.created_at <=> a.created_at }
    end
  end