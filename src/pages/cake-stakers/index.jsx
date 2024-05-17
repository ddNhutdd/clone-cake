import HeaderComponent from 'src/components/header-component';
import css from './cake-stakers.module.scss';
import HeaderComponentList7 from 'src/constants/header-component-list-7';
import Trading from './trading';

function CakeStakers() {
	return (
		<div className={css.cakeStakers}>
			<HeaderComponent list={HeaderComponentList7} />
			<Trading />
		</div>
	)
}

export default CakeStakers