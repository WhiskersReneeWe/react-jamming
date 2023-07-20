import React from 'react';
import TrackList from '../TrackList/TrackList';
import "../Playlist/Playlist.module.css";

function Playlist(props) {
    

    // console.log(`Debugging Playlist component ${props.onNameChange}`);

    return (
        <div className="Playlist">
            <input defaultValue={"Renee New Playlist"} onChange={props.onNameChange} />
            <button className="Playlist-save">Save to Spotify</button>
            <TrackList tracks={props.playlistTracks} onRemove={props.onRemove} isRemoval={true} />
        </div>
    )
}

export default Playlist;