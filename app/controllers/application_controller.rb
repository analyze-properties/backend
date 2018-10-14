class ApplicationController < ActionController::API
    def not_found
        render status: 404
    end
end
