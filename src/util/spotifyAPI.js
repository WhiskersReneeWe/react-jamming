// import Buffer from 'buffer';
// import fetch from 'node-fetch';

// TODO: Add the clientId and clientSecret to your .env file

// const tokenBody = `grant_type=authorization_code&code=${authCode}&redirect_uri=${redicrectUri}`;
// const tokenOptions = {
//   method: 'POST',
//   body: tokenBody,
//   headers: {
//     'Authorization': 'Basic ' + (Buffer.Buffer.from(clientId + ':' + clientSecret).toString('base64')),
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// };

const userObj = {
  display_name: 'Renee S. Liu',
  external_urls: {
    spotify: 'https://open.spotify.com/user/31f4bwn4r7e2y4egzwxop4bppwgq'
  },
  href: 'https://api.spotify.com/v1/users/31f4bwn4r7e2y4egzwxop4bppwgq',
  id: '31f4bwn4r7e2y4egzwxop4bppwgq',
  images: [],
  type: 'user',
  uri: 'spotify:user:31f4bwn4r7e2y4egzwxop4bppwgq',
  followers: { href: null, total: 0 },
  country: 'US',
  product: 'free',
  explicit_content: { filter_enabled: false, filter_locked: false },
  email: 'reneesyliu@gmail.com'
}

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

  const trackUrl = `https://api.spotify.com/v1/search?${query}&limit=5`;
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

let authToken;

const getAuthToken = async () => {
  if (authToken) return authToken;

  let authTokenMatch = window.location.href.match(/access_token=([^&]*)/);
  let expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

  if (authTokenMatch && expiresInMatch) {
    authToken = authTokenMatch[1];
    const expiresIn = Number(expiresInMatch[1]);
    window.setTimeout(() => authToken = '', expiresIn * 2400);
    window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
    return authToken;
  } else {
    let accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redicrectUri}`;

    window.location = accessUrl;
  }
}

// const savePlaylist = (name, trackUris) => {
//   if (!name || !trackUris.length) {
//     return;
//   }

//   const authAccessToken = getAuthToken();
//   const headers = { Authorization: `Bearer ${authAccessToken}` };

//   // return fetch('https://api.spotify.com/v1/me', {headers: headers}
//   // ).then(response => response.json()
//   // ).then(jsonResponse => {
//   //   userId = jsonResponse.id;
//   return fetch(`https://api.spotify.com/v1/users/${mySpotifyUserId}/playlists`, {
//       headers: headers,
//       method: 'POST',
//       body: JSON.stringify({name: name})
//     }).then(response => response.json()
//     ).then(jsonResponse => {
//       const playlistId = jsonResponse.id;
//       console.log(`debugging playlistId ${playlistId}`)
//       return fetch(`https://api.spotify.com/v1/users/${mySpotifyUserId}/playlists/${playlistId}/tracks`, {
//         headers: headers,
//         method: 'POST',
//         body: JSON.stringify({uris: trackUris})
//       });
//     });
//   }

  const createPlaylist = async (name) => {
    const token = await getAuthToken();
    const playlistUrl = `https://api.spotify.com/v1/users/${mySpotifyUserId}/playlists`;
    const response = await fetch(playlistUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: name})
    })
    const data = await response.json();
    const playlistId = data.id;
    return playlistId;
  };




// const getUserId = async () => {

//   const tokenResponse = await fetch(tokenUrl, tokenOptions);
//   const tokenData = await tokenResponse.json();

//   const accessToken = tokenData.access_token;
//   console.log(`debugging auth code ${accessToken}`);
  

//   // Hit user profile API
//   const profileUrl = 'https://api.spotify.com/v1/me';
//   const profileResponse = await fetch(profileUrl, {
//   headers: {
//     Authorization: `Bearer ${accessToken}`
//   }
// });

// const profileData = await profileResponse.json();
// console.log(profileData);
// return profileData.id;

// };

//getUserId();

export { search, accessToken, createPlaylist}; 
