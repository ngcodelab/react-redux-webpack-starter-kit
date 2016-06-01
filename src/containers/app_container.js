import React from 'react';

import Greet from './greet_container';
import GreetControl from './greet_control_container';

export default function() {
  return (
      <div className="greet-wrapper">
        <GreetControl />
        <Greet />
      </div>
  )
}
