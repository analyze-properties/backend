class Api::V1::TestController < ApplicationController
    before_action :authenticate_user!
    respond_to :json
    
    def index
        render json: {
            message: 'Sucessfully ran test API v1 endpoint.'
        },
        status: :ok
    end
end