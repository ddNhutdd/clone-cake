import { FaAngleDown } from 'react-icons/fa6';
import css from './per-button-group.module.scss';

function PerButtonGroup(props) {
	const {
		onClick,
		img,
		text
	} = props;
	return (
		<div onClick={onClick} className={css.perButtonGroup}>
			<div className={css.perButtonGroup__img}>
				{img}
			</div>
			<div className={css.perButtonGroup__text}>
				{text}
			</div>
			<div className={css.perButtonGroup__down}>
				<FaAngleDown />
			</div>
		</div>
	)
}

export default PerButtonGroup