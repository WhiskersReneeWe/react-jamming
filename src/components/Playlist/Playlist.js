import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.module.css';

function Playlist(props) {

    return (
        <div className="Playlist">
            <Tracklist tracklist={props.playlist} />
            <input type="text" id="playlistName" value={props.playlistName} onNameChange={props.handlePlaylistNameChange}></input>
            <button className="Playlist-save" onClick={props.addTrack}>Save to Spotify</button>
        </div>
    )
}

export default Playlist;