import css from './arb-pill.module.scss';
import ArbIcon from 'src/assets/icons/arb.icon';

function ArbPill() {
	return (
		<div className={css.arbPill}>
			<ArbIcon />
			ARB
		</div>
	)
}

export default ArbPill