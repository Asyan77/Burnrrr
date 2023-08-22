class Api::CommentsController < ActionController::API
    def index
      @comments = Comment.all.sort { |a,b| b.created_at <=> a.created_at }
      render :index
    end
    
    def show
      @photo = Photo.find_by(id: params[:id])
      render :show
    end

    def create
      @comment = Comment.new(comment_params)  
      if @comment.save
        render :show
      else
        render json: @comment.errors.full_messages, status: 401
      end
    end

    def update
      @comment = Comment.find_by(id: params[:id])
      if @comment && @comment.update(comment_params)
        render :show
      else
        render json: @photo.errors.full_messages, status: 401
      end
    end


    def destroy
      @comment = Comment.find_by(id: params[:id])
      if @comment && @comment.destroy
        render :show
      else
        render json: @photo.errors.full_messages, status: 401
      end
    end

    private
    def comment_params
      params.require(:comment).permit(:body, :photo_id, :author_id)
    end

  end