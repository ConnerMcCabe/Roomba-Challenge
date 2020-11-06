import React from 'react';
import RoombaControls from './RoombaControls';

const Results = (props) => {
  return (
    <div className="container">
      <RoombaControls 
        north={props.north}
        east={props.east}
        south={props.south}
        west={props.west}
      />
    </div>
  )
}

export default Results;