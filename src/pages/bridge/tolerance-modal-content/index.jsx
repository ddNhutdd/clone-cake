import TabHeaderSlide from 'src/components/tab-header-slide';
import css from './tolerance.module.scss';
import Switch from 'src/components/switch/switch';
import { useState } from 'react';
import { useTheme } from 'src/context/dark-theme';

const listTab = [
	{
		content: '0.5%'
	},
	{
		content: '1.00%'
	},
	{
		content: '5.00%'
	}
]

function ToleranceModalContent() {
	//tab
	const [selectedItem, setSelectedItem] = useState(listTab?.at(0));
	const onChange = (item) => {
		setSelectedItem(item);
	}

	//switch
	const [checked, setChecked] = useState(false);

	//theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.toleranceModalContent} ${darkClass}`}>
			<div className={css.toleranceModalContent__text}>
				Your transaction will revert if the price change unfavorably by more than this percentage.
			</div>
			<div className={css.toleranceModalContent__tab}>
				<TabHeaderSlide
					list={listTab}
					selectedItem={selectedItem}
					onChange={onChange}
				/>
			</div>
			<div className={css.toleranceModalContent__row}>
				<div>
					Custom percentage
				</div>
				<div>
					<Switch
						checked={checked}
						setChecked={setChecked}
					/>
				</div>
			</div>
			<div className={css.toleranceModalContent__input}>
				<input type="text" />
				<div className={css.toleranceModalContent__error}>
					ENTER A VALID SLIPPAGE PERCENTAGE
				</div>
			</div>
		</div>
	)
}

export default ToleranceModalContent;