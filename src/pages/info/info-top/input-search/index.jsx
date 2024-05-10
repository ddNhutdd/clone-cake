import Input3 from 'src/components/input-3';
import css from './input-search.module.scss';
import PillSquare from 'src/components/pill-square';
import { useState } from 'react';
import { useTheme } from 'src/context/dark-theme';


const tabList = {
	search: 'search',
	watchlist: 'watchlist'
}


function InputSearch(props) {

	const {
		show,
		close
	} = props;

	// class show
	const showStyle = show ? {} : { display: 'none' };






	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';







	// tab
	const [tabSelected, setTabSelected] = useState(tabList.search);
	const tabHeaderClickHandle = (tab) => {
		setTabSelected(tab);
	}







	return (
		<div className={`${css.inputSearch} ${darkClass}`}>
			<Input3
				placeholder={`Search liquidity pairs or tokens`}
				style={{ height: '40px' }}
			/>
			<div onClick={close} style={showStyle} className={css.inputSearch__overlay}></div>
			<div style={showStyle} className={css.inputSearch__modal}>
				<div className={css.inputSearch__modal__header}>
					<div onClick={tabHeaderClickHandle.bind(null, tabList.search)} className={css.inputSearch__modal__header__item}>
						{
							tabSelected === tabList.search ? <PillSquare
								style={{
									padding: '0 4px',
									height: 'unset',
									background: '#1fc7d4',
									color: 'white'
								}}
							>
								Search
							</PillSquare> : `Search`
						}
					</div>
					<div onClick={tabHeaderClickHandle.bind(null, tabList.watchlist)} className={css.inputSearch__modal__header__item}>
						{
							tabSelected === tabList.watchlist ? <PillSquare
								style={{
									padding: '0 4px',
									height: 'unset',
									background: '#1fc7d4',
									color: 'white'
								}}
							>
								Watchlist
							</PillSquare> :
								`Watchlist`
						}
					</div>
				</div>
				<div className={css.inputSearch__error}>
					Error occurred, please try again
				</div>
				<div className={css.inputSearch__modal__body}>
					<div className={css.inputSearch__modal__body__item}>
						<div className={css.inputSearch__modal__top}>
							<div className={css.inputSearch__modal__top__first}>
								Tokens
							</div>
							<div className={css.inputSearch__modal__top__item}>
								Price
							</div>
							<div className={css.inputSearch__modal__top__item}>
								Volume 24H
							</div>
							<div className={css.inputSearch__modal__top__item}>
								Liquidity
							</div>
						</div>
						<div className={css.inputSearch__modal__bot}>
							No Result
						</div>
					</div>
					<div className={css.inputSearch__modal__line}></div>
					<div className={css.inputSearch__modal__body__item}>
						<div className={css.inputSearch__modal__top}>
							<div className={css.inputSearch__modal__top__first}>
								Pairs
							</div>
							<div className={css.inputSearch__modal__top__item}>
								Volume 24H
							</div>
							<div className={css.inputSearch__modal__top__item}>
								Volume 7D
							</div>
							<div className={css.inputSearch__modal__top__item}>
								Liquidity
							</div>
						</div>
						<div className={css.inputSearch__modal__bot}>
							Saved tokens will appear here
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InputSearch