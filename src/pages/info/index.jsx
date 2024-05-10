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


function Info() {


	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';




	return (
		<div className={`${css.info} ${darkClass}`}>
			<HeaderComponent list={HeaderComponentList4} />
			<InfoTop />
			<div className={css.container}>
				<Warning />
				<Chart titleCss={css[`info--title`]} />
				<TopToken titleCss={css[`info--title`]} />
				<TopPair titleCss={css[`info--title`]} />
				<Transaction titleCss={css[`info--title`]} />
			</div>
		</div >
	)
}

export default Info