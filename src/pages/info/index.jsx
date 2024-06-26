import HeaderComponent from 'src/components/header-component';
import css from './info.module.scss';
import HeaderComponentList4 from 'src/constants/header-component-list-4';
import InfoTop from './info-top';
import Warning from 'src/components/warning';
import Chart from './chart';
import TopToken from './top-token';
import TopPair from './top-pair';
import Transaction from './transaction';
import { useTheme } from 'src/context/dark-theme';
import WarningIcon from 'src/assets/icons/warning.icon';


function Info() {


	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';




	return (
		<div className={`${css.info} ${darkClass}`}>
			<HeaderComponent list={HeaderComponentList4} />
			<InfoTop />
			<div className={css.container}>
				<div className={css.info__warning}>
					<Warning
						icon={<WarningIcon />}
					>
						The markets for some of the newer and low-cap tokens displayed on the v2 info page are highly volatile, and as a result, token information may not be accurate.
						{" "}
						<span>
							Before trading any token, please DYOR, and pay attention to the risk scanner.
						</span>
					</Warning>
				</div>
				<Chart titleCss={css[`info--title`]} />
				<TopToken titleCss={css[`info--title`]} />
				<TopPair titleCss={css[`info--title`]} />
				<Transaction titleCss={css[`info--title`]} />
			</div>
		</div >
	)
}

export default Info