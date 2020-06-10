import React from 'react';
import './CheckBox.css';

const CheckBox = props => (
	<label>
		<input
			type="checkbox"
			checked= {props.cbStats_pts}
			onChange={props.onCheckboxChange}
			name={props.cbType}
		/>
		- {props.cbType}
	</label>
);

export default CheckBox;
