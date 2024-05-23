import Switch from 'src/components/switch/switch';
import css from './destination-modal-content.module.scss';
import TabHeaderSlide from 'src/components/tab-header-slide';
import { useState } from 'react';
import { useTheme } from 'src/context/dark-theme';

const listTab = [
	{
		content: 'NONE'
	},
	{
		content: 'MEDIUM'
	},
	{
		content: 'MAX'
	}
]

function DestinationModalContent() {
	// tab 
	const [selectedTab, setSelectedTab] = useState(listTab?.at(0));
	const tabChangeHandle = (item) => {
		setSelectedTab(item);
	}

	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.destinationModalContent} ${darkClass}`}>
			<div className={css.destinationModalContent__text}>
				Choose the amount of
				{" "}
				<span>
					BNB
				</span>
				{" "}
				you want to swap.
				The total amount you’ll pay in your wallet includes the gas you’ll be airdropping to your destination.
			</div>
			<div className={css.destinationModalContent__tab}>
				<TabHeaderSlide
					list={listTab}
					onChange={tabChangeHandle}
					selectedItem={selectedTab}
				/>
			</div>
			<div className={css.destinationModalContent__row}>
				<div>
					Custom amount
				</div>
				<div>
					<Switch />
				</div>
			</div>
			<div className={css.destinationModalContent__controlGroup}>
				<img
					src="https://icons-ckg.pages.dev/lz-dark/tokens/bnb.svg"
					alt="dk"
				/>
				<input type="text" />
				<div className={css.destinationModalContent__max}>
					Max
				</div>
			</div>
			<div className={css.destinationModalContent__error}>
				Requested airdrop exceeds max: 0.24 ETH
			</div>
			<div className={css.destinationModalContent__lastRow}>
				<div>
					Cost
				</div>
				<div>
					0.000311466 ETH
				</div>
			</div>
		</div>
	)
}

export default DestinationModalContent