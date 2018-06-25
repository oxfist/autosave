class PagesController < ApplicationController
  def home
    @first_game_id = Game.first.id
  end
end
