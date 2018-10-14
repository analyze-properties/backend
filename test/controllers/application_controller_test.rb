require 'test_helper'

class ApplicationControllerTest < ActionDispatch::IntegrationTest
  test 'Should return not found for not_found action' do
    get '/'
    assert_response :not_found
  end
end
