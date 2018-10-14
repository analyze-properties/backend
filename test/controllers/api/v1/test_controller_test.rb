require 'test_helper'

class TestControllerTest < ActionDispatch::IntegrationTest
  test 'Should return OK with message from Test API' do
    get '/api/v1/test'
    json_response = JSON.parse(response.body)

    assert_response :ok
    assert_equal 'Sucessfully ran test API v1 endpoint.', json_response['message']
  end
end
