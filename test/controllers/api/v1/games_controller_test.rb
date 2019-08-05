require 'test_helper'

class Api::V1::GamesControllerTest < ActionDispatch::IntegrationTest
  test 'should get a single game when passing id' do
    first_game_id = Game.first.id

    get api_v1_game_path(first_game_id)

    assert_response :success
  end
end
