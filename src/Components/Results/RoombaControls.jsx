import React from 'react';

const RoombaControls = (props) => {
  return (
    <div>
      <button onClick={props.north}>North</button>
      <button onClick={props.east}>East</button>
      <button onClick={props.south}>South</button>
      <button onClick={props.west}>West</button>
    </div>
  )
}


export default RoombaControls;