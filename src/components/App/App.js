import '../App/App.css';
import React, { useState, useEffect } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';


function App() {
    


    const [searchResults, setSearchResults] = useState([
        {
        name: 'Search Tiny Dancer',
        artist: 'Elton John',
        album: 'Madman Across The Water',
        id: 1
        },
        {
            name: 'Yello Submarine',
            artist: 'The Beatles',
            album: 'Revolver',
            id: 2
        },
        {
            name: 'All of me', 
            artist: 'John Legend',
            album: 'Love in the Future',
            id: 3
        },
        {
            name: 'I will always love you',
            artist: 'Whitney Houston',
            album: 'The Bodyguard',
            id: 4   
        },
        {
            name: 'Cheap Thrills',
            artist: 'Sia',
            album: '1000 Forms of Fear',
            id: 5
        }
    ]);
    const [playlistName, setPlaylistName] = useState('Renee Playlist');
    const [playlistTracks, setPlaylistTracks] = useState(
        [
        
            {
                name: 'Playlist BIG Dancer',
                artist: 'Playlist Elton John',
                album: 'Playlist Madman Across The Water',
                id: 3,
                uri: "fakeuri-3"
            },
            {
                name: 'Playlist Yello Submarine',
                artist: 'Playlist The Beatles',
                album: 'Playlist Revolver',
                id: 4,
                uri: "fakeuri-4"
            }
        
    ]
    );
    
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
    
    const savePlaylist = () => {
        const trackURIs = playlistTracks.map(track => track.uri);
    }
    

    return (
        <div>
            <h1 className="highlight">
                 MyJammming App
            </h1>
            <div className="App">
                <SearchBar />
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
                        onSave={savePlaylist} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default App;