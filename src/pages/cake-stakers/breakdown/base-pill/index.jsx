import css from './base-pill.module.scss';
import BaseIcon from 'src/assets/icons/base.icon';

function BasePill() {
	return (
		<div className={css.basePill}>
			<BaseIcon />
			Base
		</div>
	)
}

export default BasePill