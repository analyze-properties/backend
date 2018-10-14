module Api::V1
    class TestController < ApplicationController
        def index
            render json: {
                message: 'Sucessfully ran test API v1 endpoint.'
            },
            status: :ok
        end
    end
end