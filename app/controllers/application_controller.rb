class ApplicationController < ActionController::API
    include ActionController::RequestForgeryProtection
    wrap_parameters include: User.attribute_names + ['password']

    protect_from_forgery with: :exception
    before_action :snake_case_params, :attach_authenticity_token


    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        if !logged_in?
            render json: {errors: ['Must be logged in']}, status: :unauthorized 
        end
    end

    def require_logged_out
        if logged_in?
            render json: {errors: ['Must be logged out']}, status: 403
        end
    end

    def logged_in?
        !!current_user
    end

    def login(user)
       session[:session_token] = user.reset_session_token!
       @current_user = user
    end

    def logout 
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    private
    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end

    def attach_authenticity_token
        headers['X-Csrf-Token'] = form_authenticity_token
    end

end
