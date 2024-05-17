import css from './bnb-pill.module.scss';
import BnbIcon from 'src/assets/icons/bnb.icon';

function BnbPill() {
	return (
		<div className={css.bnbPill}>
			<BnbIcon />
			BNB
		</div>
	)
}

export default BnbPill