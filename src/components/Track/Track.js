import React from 'react';
import "../Track/Track.css";

function Track(props) {

    const addTrack = () => {
        props.onAdd(props.track);
    }

    const removeTrack = () => {
        props.onRemove(props.track);
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist}</p>
                <p>{props.track.album}</p>
            </div>
            <button className="Track-action" onClick={props.isRemoval ? removeTrack: addTrack}>{props.isRemoval ? "-": "+"}</button>
        </div>
    )
}

export default Track;