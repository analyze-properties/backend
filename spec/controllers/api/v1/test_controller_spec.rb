# require 'test_helper'
require 'spec_helper'
require 'devise/jwt/test_helpers'

RSpec.describe Api::V1::TestController "TestController test" do
  context "testing" do
    it 'Should return OK with message from Test API' do
      user = User.find_by(email: 'testUser1@analyze-properties.com')
      headers = { 'Accept' => 'application/json', 'Content-Type' => 'application/json' }

      auth_headers = Devise::JWT::TestHelpers.auth_headers(headers, user)

      get '/api/v1/test', headers: auth_headers
      json_response = JSON.parse(response.body)

      assert_response :ok
      assert_equal 'Sucessfully ran test API v1 endpoint.', json_response['message']
    end

    it 'Should return Forbidden with message from Test API' do
      get '/api/v1/test'
      json_response = JSON.parse(response.body)

      assert_response :unauthorized
    end
  end
end
