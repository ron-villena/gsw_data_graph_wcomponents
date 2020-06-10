import React from 'react';
import './Nav.css';

import Select from '../Select/Select.js'
import CheckBox from '../CheckBox/CheckBox.js'

import gsw_logo from './gsw_logo.png';
import big_three from './big_three.jpg';

const Nav = props => (
  <nav class="nav">
    <div class="nav__title">
      <img src={gsw_logo} class="nav__title--logo" />
      <h1 id="title" class="nav__title--header">Golden State Warriors - Big Three</h1>
      <img src={big_three} class="nav__title--big3" />
    </div>
    <div class="nav__controls">
      <Select
        onSelectChange={props.onSelectChange}
      />
      <div class='na__controls--stats'>
        <div>
          <CheckBox
            cbStats_pts={props.cbStats_pts}
            onCheckboxChange={props.onCheckboxChange}
            cbType="points"
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked= {props.cbStats_rbs}
              onChange={props.onCheckboxChange}
              name="rebounds"
            />
            - Rebounds
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked= {props.cbStats_ast}
              onChange={props.onCheckboxChange}
              name="assists"
            />
            - Assists
          </label>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
