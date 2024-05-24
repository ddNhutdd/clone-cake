import { FaAngleDown } from 'react-icons/fa6';
import css from './per-button-group.module.scss';
import ArbCircleIcon from 'src/assets/icons/arb-circle.icon';

function PerButtonGroup() {
	return (
		<div className={css.perButtonGroup}>
			<div className={css.perButtonGroup__img}>
				<ArbCircleIcon />
			</div>
			<div className={css.perButtonGroup__text}>
				Arbitrum
			</div>
			<div className={css.perButtonGroup__down}>
				<FaAngleDown />
			</div>
		</div>
	)
}

export default PerButtonGroup