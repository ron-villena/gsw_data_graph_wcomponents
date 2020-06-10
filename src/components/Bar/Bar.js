import React from 'react';
import './Bar.css';


const Bar = props => (
  <div class={props.classType} style={{height: props.infoPlayerStat * 9 + "px", width: props.getWidth + "%"}} >{props.playerName} - {props.infoPlayerStat} {props.statType}/gm</div>
);

export default Bar;
