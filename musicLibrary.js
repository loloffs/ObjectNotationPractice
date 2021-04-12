const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function(library) {
  let result = '';
  for (const key in library.playlists) {
    result += `${key}: ${library["playlists"][key]["name"]} - ${library["playlists"][key]["tracks"].length} track(s)\n`;
  }
  return result;
}
// console.log(printPlaylists(library));


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  let result = '';
  for (const key in library.tracks) {
    result += `${key}: ${library["tracks"][key]["name"]} by ${library["tracks"][key]["artist"]} (${library["tracks"][key]["album"]})\n`;
  }
  return result;
}
// console.log(printTracks());



// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let result = `${library['playlists'][playlistId].id}: ${library['playlists'][playlistId].name} - ${library['playlists'][playlistId]['tracks'].length} tracks\n`;
  for (const key of library.playlists[playlistId]["tracks"]) {
    for (const x in library.tracks) {
      if (x === key) {
       result += `${x}: ${library["tracks"][x]["name"]} by ${library["tracks"][x]["artist"]} (${library["tracks"][x]["album"]})\n`;
      }
    }
  }
  return result
}
// console.log(printPlaylist('p01'));



// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  const allTracks = Object.keys(library["tracks"]);
  const allPlaylists = Object.keys(library["playlists"]);

  if (!allTracks.includes(trackId)) {
    return "Please enter an existing track"
  }

  if (!allPlaylists.includes(playlistId)) {
    return "Please enter an existing playlist"
  }

  library['playlists'][playlistId]['tracks'].push(trackId);
  return library['playlists'][playlistId];
}
// console.log(addTrackToPlaylist('t03', 'p01'));


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  const ID = generateUid();
  library.tracks[ID] = {
    id: ID,
    name,
    artist,
    album
  }
  console.log(library['tracks'])
}
// addTrack("Yeet Street", "Luke Oloffs", "Bruh");


// adds a playlist to the library
const addPlaylist = function(name) {
  const ID = generateUid();
  library.playlists[ID] = {
    id: ID,
    name,
    tracks: []
  }
  console.log(library['playlists'])
}
// addPlaylist("Workout");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}