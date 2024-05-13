import { NavLink } from 'react-router-dom';
import css from './navigate.module.scss';
import ArrowSquareIcon from 'src/assets/icons/arrow-square.icon';

function Navigate() {
	return (
		<div className={css.ifo__navigate}>
			<NavLink
				className={`--link ${css.ifo__navigate__link}`}
			>
				Apply to run an IFO!
				<ArrowSquareIcon />
			</NavLink>
		</div>
	)
}

export default Navigate