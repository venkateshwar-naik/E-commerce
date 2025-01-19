// import React from 'react'

// const Light = () => {
//   return (
//     <div>Light</div>
//   )
// }

// export default Light



import React, { useState } from 'react';

import './Light.scss';

const LightSwitch = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const handleLightOn = () => {
    setIsLightOn(true);
  };

  const handleLightOff = () => {
    setIsLightOn(false);
  };

  return (
    <div className='fullScreen'>
      <h2 className= {isLightOn ? 'on' : 'off'}>The light is {isLightOn ? 'on' : 'off'}</h2>
      <button onClick={handleLightOn}>Turn On</button>
      <button onClick={handleLightOff}>Turn Off</button>
    </div>
  );
};

export default LightSwitch;
