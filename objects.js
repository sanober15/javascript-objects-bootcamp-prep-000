//var objects = {artistName : 'songTitle'};
//var objects = {};

//var objects = {};
var playlist = Object.assign({}, {'artistName':'songTitle'})

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, {[artistName]:songTitle});
  
}
/*


Create a function updatePlaylist that accepts three parameters: the playlist (an object),
 an artist name (a string), and a song title. The body of the function should add the song
 and artist as a key-value pair to the playlist object. The function should return the whole
 playlist.

Create a function removeFromPlaylist that accepts two arguments
(the playlist object and the artist name). The body of the function
should delete the key-value pair from the playlist and return the updated playlist.
*/
