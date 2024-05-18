import HeaderComponent from 'src/components/header-component';
import css from './cake-stakers.module.scss';
import HeaderComponentList7 from 'src/constants/header-component-list-7';
import Trading from './trading';
import Reward from './reward';
import Pool from './pool';
import HowToEarn from './how-to-earn';
import Breakdown from './breakdown';
import Question from './question';

function CakeStakers() {
	return (
		<div className={css.cakeStakers}>
			<HeaderComponent list={HeaderComponentList7} />
			<Trading />
			<Reward />
			<Pool />
			<HowToEarn />
			<Breakdown />
			<Question />
		</div>
	)
}

export default CakeStakers