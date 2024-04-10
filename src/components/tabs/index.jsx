import React, { useEffect, useState } from 'react';
import css from './tabs.module.scss';
import PropTypes from 'prop-types';

function Tabs(props) {
	const {
		listTabs,
		selectedItem,
		onChange
	} = props;

	const [itemActive, setItemActive] = useState(selectedItem?.value);

	const renderClassActive = (item) => {
		if (item.value !== itemActive) {
			return;
		}

		return css.active;
	};
	const itemClickHandle = (item) => setItemActive(item?.value);
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

	useEffect(() => {
		const itemSelected = listTabs.find((item) => item.value === itemActive);
		onChange(itemSelected);
	}, [itemActive]);

	return <div className={css.tabs}>{renderList()}</div>;
}

Tabs.propTypes = {
	listTabs: PropTypes.array,
	selectedItem: PropTypes.object,
	onChange: PropTypes.func,
};

export default Tabs;
