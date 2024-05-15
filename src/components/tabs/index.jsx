import React, { useEffect, useState } from 'react';
import css from './tabs.module.scss';
import PropTypes from 'prop-types';
import { useTheme } from 'src/context/dark-theme';

export const tabColor = {
	purple: 'purple',
	skyBlue: 'skyBlue'
}

function Tabs(props) {
	const {
		listTabs,
		selectedItem,
		onChange,
		color = tabColor.purple
	} = props;

	const { isDarkMode } = useTheme();
	const classTheme = isDarkMode ? css.dark : '';

	const [itemActive, setItemActive] = useState(selectedItem?.value);

	const renderClassActive = (item) => {
		if (item.value !== itemActive) {
			return;
		}

		return css.active;
	};
	const itemClickHandle = (item) => {
		setItemActive(item?.value)
		onChange(item)
	};
	const renderList = () =>
		listTabs.map((item) => (
			<div
				key={item.id}
				className={`${css.tabs__item} ${renderClassActive(item)}`}
				onClick={itemClickHandle.bind(null, item)}
			>
				{item.content}
			</div>
		));
	const renderColor = () => {
		switch (color) {
			case tabColor.purple:
				return css.purple;

			case tabColor.skyBlue:
				return css.skyBlue;

			default:
				break;
		}
	}


	return (
		<div className={`${css.tabs} ${classTheme} ${renderColor()}`}>
			{renderList()}
		</div>
	);
}

Tabs.propTypes = {
	listTabs: PropTypes.array,
	selectedItem: PropTypes.object,
	onChange: PropTypes.func,
};

export default Tabs;
