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
        songs: '$songs',
        albums: { $size: '$albums' }
      }
    }
  ]);

 
  // const albumStats = await Song.aggregate([
  //   { $group: { _id: '$album', count: { $sum: 1 } } }
  // ]);


const albumStats = await Song.aggregate([
  {
    $group: {
      _id: {
        artist: '$artist',
        album: '$album'
      },
      songs: { $sum: 1 }
    }
  },
  {
    $group: {
      _id: '$_id.artist',
      albums: {
        $push: {
          album: '$_id.album',
          songs: '$songs'
        }
      }
    }
  }
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
