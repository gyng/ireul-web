json.array!(@songs) do |song|
  json.extract! song, :id, :artist_id, :title
  json.url song_url(song, format: :json)
end
