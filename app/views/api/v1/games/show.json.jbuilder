json.extract! @game, :id, :title, :release_year, :comment, :next_id,
              :prev_id
json.image image_path(@game.image || '')
