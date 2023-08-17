class PhotosController < ApplicationController
    def show
      @photo = User.find(params[:id])
    end
  end