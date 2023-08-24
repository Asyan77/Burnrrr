class Api::PhotosController < ApplicationController
    def index
      if params[:user_id]
        @photos = Photo.all.where(user_id: params[:user_id])
      else
      @photos = Photo.all.sort { |a,b| b.created_at <=> a.created_at }
      end
      render :index

    end
    
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