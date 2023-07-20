import React from 'react';
import Track from '../Track/Track';
import "../TrackList/TrackList.module.css";




const TrackList = (props) => {
    
    
    // console.log("What is the value of props.tracks?");
    // console.log(props.tracks);

    return (
      <div className="TrackList">
        {props.tracks.map((track) => {
          return (
            <Track
              track={track}
              key={track.id}
              onAdd={props.onAdd}
              isRemoval={props.isRemoval}
              onRemove={props.onRemove}
            />
          );
        })}
      </div>
    );
  };


export default TrackList;