import HeaderComponent from 'src/components/header-component';
import css from './ifo.module.scss';
import HeaderComponentList5 from 'src/constants/header-component-list-5';
import Top from './top';
import Cards from './cards';

function Ifo() {
	return (
		<div className={css.ifo}>
			<HeaderComponent list={HeaderComponentList5} />
			<Top />
			<div className={css.container}>
				<Cards />
				<div className={css.ifo__timeline}></div>
			</div>
		</div>
	)
}

export default Ifo;