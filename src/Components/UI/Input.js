import classes from '../UI/Input.module.css'
import React from 'react';
const Input = React.forwardRef( (props, ref) => {
	return (
		<div className={classes.input}>
			<label>{props.input.label}|</label>
            <input id={props.input.id} {...props.input} ref = {ref}></input>
		</div>
	);
});

export default Input;
