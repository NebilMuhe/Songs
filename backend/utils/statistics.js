const Song = require('../models/songsModel');

const getStats = async() => {
  const totalSongs = await Song.countDocuments();
  const artists = await Song.distinct('artist');
  const albums = await Song.distinct('album');
  const genres = await Song.distinct('genre').sort();

  const songsPerGenre = await Song.aggregate([
    { $group: { _id: '$genre', count: { $sum: 1 } } }
  ]);

 
  const artistStats = await Song.aggregate([
    { $group: { _id: '$artist', songs: { $sum: 1 }, albums: { $addToSet: '$album' } } },
    {
      $project: {
        _id: '$_id',
        songs: '$_id',
        albums: { $ifNull: [ "$_id", [] ] }
        // albums: { $size: '$_id' }
      }
    }
  ]);

 
  const albumStats = await Song.aggregate([
    { $group: { _id: '$album', count: { $sum: 1 } } }
  ]);

  return {
    totalSongs,
    artists: artists.length,
    albums: albums.length,
    genres,
    songsPerGenre,
    artistStats,
    albumStats
  };
}

module.exports = { getStats };
