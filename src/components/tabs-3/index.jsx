import { useEffect, useRef } from 'react';
import Card from '../card';
import css from './tabs-3.module.scss';
import { useTheme } from 'src/context/dark-theme';

function Tabs3(props) {
	const {
		tabs,
		children,
		selectedTab,
		onChange
	} = props

	const { isDarkMode } = useTheme();
	const classTheme = isDarkMode ? css.dark : '';


	const containerElement = useRef(null);

	const setTabActive = (value) => {
		if (selectedTab?.value === value) {
			return css.active;
		}
	}

	const renderTabHeader = () => {
		return tabs.map((header, index) => {
			return (
				<div
					onClick={tabHeaderClickHandle.bind(null, header.value)}
					key={index}
					className={`${css.tabs3__headerItem} ${setTabActive(header.value)}`}
				>
					{header.header}
				</div>
			)
		})
	}

	const tabHeaderClickHandle = (value) => {
		if (!containerElement || !containerElement.current) {
			return;
		}

		// lấy các phần tử con có dataset là tab
		const listTab = containerElement.current.querySelectorAll('div[data-item]');
		listTab.forEach(tab => {
			const tabValue = tab.dataset['item'];
			if (value === tabValue) {
				tab.classList.remove('d-0')
			} else if (value !== tabValue) {
				!tab.classList.contains('d-0') && tab.classList.add('d-0')
			}
		})

		// 
		const tab = tabs.find(item => item.value === value);
		if (tab) {
			onChange(tab)
		}
	}

	useEffect(() => {
		tabHeaderClickHandle(selectedTab.value)
	}, [])

	return (
		<Card ref={containerElement}>
			<div className={`${css.tabs3__header} ${classTheme}`}>
				{renderTabHeader()}
			</div>
			<div className={css.tabs3__content}>
				{children}
			</div>
		</Card>
	)
}

export default Tabs3