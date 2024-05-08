import React from 'react';
import PropTypes from 'prop-types';
import css from './check-box.module.scss';
import { FaCheck } from 'react-icons/fa';
import { useTheme } from 'src/context/dark-theme';

function CheckBox(props) {
	const { checked, setCheck, id, children } = props;

	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	const checkBoxClickHandle = () => setCheck((state) => !state);

	return (
		<>
			<input className='d-0' id={id} type='checkbox' checked={checked} onChange={() => { }} />
			<label
				onClick={checkBoxClickHandle}
				className={`${css.checkBox} ${darkClass}`}
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
