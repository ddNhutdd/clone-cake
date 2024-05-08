import React from 'react';
import PropTypes from 'prop-types';
import css from './item.module.scss';
import Switch from 'src/components/switch/switch';
import { useTheme } from 'src/context/dark-theme';

function Item(props) {
	const {
		img,
		top,
		bot,
		checked,
		setChecked
	} = props;

	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';



	const renderActive = (checked) => {
		return checked ? css.active : ''
	}

	return (
		<div className={`${darkClass} ${css.item} ${renderActive(checked)}`}>
			<div>
				<img src={img} alt={top} />
			</div>
			<div>
				<div className={css.item__top}>
					{top}
				</div>
				<div className={css.item__bot}>
					{bot}
				</div>
			</div>
			<div>
				<Switch
					checked={checked}
					setChecked={setChecked}
				/>
			</div>
		</div>
	)
}

Item.propTypes = {
	img: PropTypes.node,
	top: PropTypes.node,
	bot: PropTypes.node,
	checked: PropTypes.bool,
	setChecked: PropTypes.func
}

export default Item
