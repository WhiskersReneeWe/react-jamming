import React from 'react';
import TrackList from '../TrackList/TrackList';
import "../Playlist/Playlist.module.css";

function Playlist(props) {

    return (
        <div className="Playlist">
            <input defaultValue={"Renee New Playlist"} />
            <button className="Playlist-save">Save to Spotify</button>
            <TrackList tracks={props.playlistTracks} onAdd={props.onAdd} />
        </div>
    )
}

export default Playlist;