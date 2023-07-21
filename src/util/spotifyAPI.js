// import fetch from 'node-fetch'; 


const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';

const body = 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret;

// write this into a function that returns the access token
const accessToken = async () => {
  
  const response = await fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: body
})

 const data = await response.json();

 const accessToken = await data.access_token;

  return accessToken;
};


// url placeholder: 'https://api.spotify.com/v1/search?q=remaster%20track:Doxy%20artist:Miles%20Davis&type=track'

const search = async (searchTerm) => {
  // const accessToken = await accessToken(clientId, clientSecret);
  //const accessToken = 'BQDPsnz8pC70WYhknzM3kySOQ4uyP40hs4Xe-7oFhKOaipW1Jh9-z9IqC035mJPQvLCkwBX6ZXYoPLgNKyOJ8Kc6h9MVqJ_wE2OUZzFIEYzVgdSP44g';
  const token = await accessToken();
  const searchQuery = encodeURIComponent(searchTerm);

  const query = `q=${searchQuery}&type=track`;

  const trackUrl = `https://api.spotify.com/v1/search?${query}&limit=8`;
  const response = await fetch(trackUrl, {

  method: 'GET',

  headers: {
    'Authorization': `Bearer ${token}` 
  }

})

const data = await response.json();
// id, name, artist, album, and uri.
const trackItems = data.tracks.items;

const tracks = trackItems.map((track) => {
  return {
    id: track.id,
    name: track.name,
    artist: track.artists[0].name,
    album: track.album.name,
    uri: track.uri
}
}
)

return tracks;

};


export { search, accessToken}; 


