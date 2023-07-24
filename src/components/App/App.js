import '../App/App.css';
import React, { useState, useCallback } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import { search, createPlaylist, getUserId} from '../../util/spotifyAPI.js';


function App() {
    
    console.log("starting App.js debugging from App.js")
    console.log("testing creating playlist id")

    // let playlistId;
    // playlistId = createPlaylist("Renee Playlist 1");
    // console.log(playlistId);
    
    const [searchResults, setSearchResults] = useState([]);

    const [playlistName, setPlaylistName] = useState('Renee Playlist');
    const [playlistTracks, setPlaylistTracks] = useState(
        [
        
    ]
    );
    


    const mySearch = (searchTerm) => {

        async function callSearch() {
            const newSearchResults = await search(searchTerm);
            setSearchResults(newSearchResults);
            console.log(newSearchResults);
        }

        console.log(`debugging searchTerm passed back from Search Bar ${searchTerm}`);

        console.log("debugging aysnc callSearch")
        callSearch();
        
    };

    
    const handlePlaylistNameChange = (event) => {
        setPlaylistName(event.target.value);
        console.log("Debugging Name Change");
    };

    const addTrack = (track) => {
        if(track.id === playlistTracks.id) {
            return;
    }
        setPlaylistTracks([...playlistTracks, track])
    };

    const removeTrack = (track) => {
        setPlaylistTracks(playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id))
    };
    
    const saveMyPlaylist = () => {
        const trackURIs = playlistTracks.map(track => track.uri);
        console.log("Debugging savePlaylist from App.js")
        console.log(trackURIs);
        //savePlaylist("Renee Playlist 1", trackURIs);
    }

    
    


    return (
        <div>
            <h1 className="highlight">
                 MyJammming App
            </h1>
            <div className="App">
                <SearchBar onSearch={mySearch} />
                <div className="App-playlist">
                    <div className="SearchResults">
                        <SearchResults searchResults={searchResults} onAdd={addTrack} />
                    </div>
                    <div className="Playlist">
                    <Playlist 
                        playlistName={playlistName}
                        playlistTracks={playlistTracks} 
                        onNameChange={handlePlaylistNameChange} 
                        isRemoval={false}
                        onRemove={removeTrack} 
                        onSave={saveMyPlaylist} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default App;