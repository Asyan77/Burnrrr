class Api::PhotosController < ActionController::API
    def index
      # write multiple conditions, 
      # 1. get all photos to person logged in
      # 2. get all photos
      #  3. get photos by a given user id 
      @photos = Photo.all.sort { |a,b| b.created_at <=> a.created_at }
      render :index
    end

    def show
      @photo = Photo.find_by(id: params[:id])
      render :show
      # render json: @photo
    end
  end