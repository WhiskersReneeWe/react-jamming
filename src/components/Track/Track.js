import React from 'react';
import "../Track/Track.module.css";

function Track(props) {



    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist}</p>
                <p>{props.track.album}</p>
            </div>
            <button className="Track-action" >+</button>
        </div>
    )
}

export default Track;