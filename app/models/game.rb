class Game < ApplicationRecord
  def next_id
    self.class.where('id > ?', id).pluck(:id).first
  end

  def prev_id
    self.class.where('id < ?', id).pluck(:id).last
  end
end
