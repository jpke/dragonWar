import React from 'react';

const SelectedDragon = props => (
  <div>
    <img
      src={props.selectedDragon}
      name="dragon1"
      alt="dragon 1"
      width="156"
      height="150"
      onMouseOver={this.selectDragon}
    />
  </div>
);

export default SelectedDragon;
