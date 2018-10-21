require "application_responder"

class ApplicationController < ActionController::API
    self.responder = ApplicationResponder
    include ActionController::MimeResponds

    respond_to :json
    
    def not_found
        render status: 404
    end
end
