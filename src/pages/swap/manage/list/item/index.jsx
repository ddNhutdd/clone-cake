import React from 'react';
import PropTypes from 'prop-types';
import css from './item.module.scss';
import Switch from 'src/components/switch/switch';

function Item(props) {
	const {
		img,
		top,
		bot,
		checked,
		setChecked
	} = props;

	const renderActive = (checked) => {
		return checked ? css.active : ''
	}

	return (
		<div className={`${css.item} ${renderActive(checked)}`}>
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
