class Api::PhotosController < ActionController::API
    def index
      # write multiple conditions, 
      # 1. get all photos to person logged in
      # @user_photos = Photo.find_by(user_id: params[:user_id])
      # 2. get all photos
      @photos = Photo.all.sort { |a,b| b.created_at <=> a.created_at }
      render :index
    end
    
    #  3. get photos by a given user id 
    def show
      @photo = Photo.find_by(id: params[:id])
      render :show
    end

    def create
      @photo = Photo.new(photo_params)  
      if @photo.save
        render :show
      else
        render json: @photo.errors.full_messages, status: 401
      end
    end

    def update
      @photo = Photo.find_by(id: params[:id])
      if @photo && @photo.update(photo_params)
        render :show
      else
        render json: @photo.errors.full_messages, status: 401
      end
    end


    def destroy
      @photo = current_user.photos.find_by(id: params[:id])
      if @photo && @photo.destroy
        render :show
      else
        render json: @photo.errors.full_messages, status: 401
      end
    end

    private
    def photo_params
      params.require(:photo).permit(:title, :description, :user_id)
    end

  end