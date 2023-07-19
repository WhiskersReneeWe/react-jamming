import React, { useState } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import './App.module.css';

function App() {
    
    const searchResults = [
        {
        name: 'Tiny Dancer',
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
    ];

    const [playlistName, setPlaylistName] = useState('Renee Playlist');
    const [playlistTracks, setPlaylistTracks] = useState(
        [
        
            {
                name: 'Tiny Dancer',
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
        
    ]
    );
    
    const handlePlaylistNameChange = (event) => {
        setPlaylistName(event.target.value);
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

    
    return (
        <div>
            <h1>My Music App</h1>

            <SearchBar />

        <div className="main-content">
            <SearchResults searchResults={searchResults} onAdd={addTrack} />
            <Playlist 
                playlistName={playlistName}
                playlist={playlistTracks} 
                onNameChange={handlePlaylistNameChange} />
        </div>

        </div>
    )
}

export default App;