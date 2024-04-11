import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import css from './tabs-2.module.scss';
import Button, {buttonClassesType} from '../button';

function Tabs2(props) {
	const {listTabs, selectedItem, onChange, typeButton} = props;

	const [itemActive, setItemActive] = useState(selectedItem?.value);

	const renderActive = (item) => {
		if (item.value !== itemActive) {
			return typeButton;
		}

		return buttonClassesType.primaryThin;
	};

	const itemClickHandle = (item) => setItemActive(item?.value);
	const renderList = () =>
		listTabs.map((item) => (
			<Button
				key={item.id}
				type={renderActive(item)}
				onClick={itemClickHandle.bind(null, item)}
			>
				{item.content}
			</Button>
		));

	useEffect(() => {
		const itemSelected = listTabs.find((item) => item.value === itemActive);
		onChange(itemSelected);
	}, [itemActive]);

	return <div className={css.tabs2}>{renderList()}</div>;
}

Tabs2.propTypes = {
	listTabs: PropTypes.array,
	selectedItem: PropTypes.object,
	onChange: PropTypes.func,
	typeButton: PropTypes.oneOf(Object.values(buttonClassesType)),
};

Tabs2.defaultProps = {
	typeButton: buttonClassesType.primaryText,
};

export default Tabs2;
