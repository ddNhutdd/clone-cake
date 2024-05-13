import HeaderComponent from 'src/components/header-component';
import css from './ifo.module.scss';
import HeaderComponentList5 from 'src/constants/header-component-list-5';
import Top from './top';
import Cards from './cards';
import TimeLine from './time-line';
import Navigate from './navigate';

function Ifo() {
	return (
		<div className={css.ifo}>
			<HeaderComponent list={HeaderComponentList5} />
			<Top />
			<Cards />
			<div className={css.container}>
				<div className={css.ifo__timeline}></div>
			</div>
			<TimeLine />
			<Navigate />
		</div>
	)
}

export default Ifo;