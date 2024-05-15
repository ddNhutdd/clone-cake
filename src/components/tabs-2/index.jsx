import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './tabs-2.module.scss';
import Button from '../button';

export const tab2Color = {
	purple: 'purple',
	skyBlue: 'skyBlue'
}

function Tabs2(props) {
	const {
		listTabs,
		selectedItem,
		onChange,
		color = tab2Color.skyBlue,
		customItem,
		customActiveItem
	} = props;

	const [itemActive, setItemActive] = useState(selectedItem?.value);

	const renderActive = (item) => {
		if (item.value === itemActive) {
			return css.active;
		}
		return '';
	};
	const renderClassCustom = (item) => {
		if (item.value === itemActive) {
			return customActiveItem;
		}
		return customItem;
	}
	const itemClickHandle = (item) => {
		setItemActive(item?.value)
		onChange(item);
	};
	const renderList = () =>
		listTabs.map((item) => (
			<div
				className={css.tabs2__item}
				key={item.id}>
				<Button
					onClick={itemClickHandle.bind(null, item)}
					className={`w-100 ${css.button} ${renderClassCustom(item)} ${renderActive(item)}`}
					style={{ whiteSpace: "nowrap" }}
				>
					{item.content}
				</Button>
			</div>
		));
	const renderColor = () => {
		switch (color) {
			case tab2Color.purple:
				return css[tab2Color.purple];

			case tab2Color.skyBlue:
				return css[tab2Color.skyBlue];

			default:
				break;
		}
	}

	return (
		<div
			style={{ gridTemplateColumns: `repeat(${listTabs.length}, 1fr)` }}
			className={`${css.tabs2} ${renderColor()}`}
		>
			{renderList()}
		</div>
	);
}

Tabs2.propTypes = {
	listTabs: PropTypes.array,
	selectedItem: PropTypes.object,
	onChange: PropTypes.func,
};

export default Tabs2;
