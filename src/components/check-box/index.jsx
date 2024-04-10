import React from 'react';
import PropTypes from 'prop-types';
import css from './check-box.module.scss';
import {FaCheck} from 'react-icons/fa';

function CheckBox(props) {
	const {checked, setCheck, id, children} = props;

	const checkBoxClickHandle = () => setCheck((state) => !state);

	return (
		<>
			<input className='d-0' id={id} type='checkbox' checked={checked} />
			<label
				onClick={checkBoxClickHandle}
				className={css.checkBox}
				htmlFor={id}
			>
				<div className={css.checkBox__square}>
					<FaCheck />
				</div>
				<div className={css.checkBox__content}>{children}</div>
			</label>
		</>
	);
}

CheckBox.propTypes = {
	checked: PropTypes.bool,
	setCheck: PropTypes.func,
	children: PropTypes.node,
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CheckBox;
