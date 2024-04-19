import css from './network-item.module.scss';
import { GoDotFill } from "react-icons/go";

function NetworkItem(props) {
	const {
		content,
		active,
		onClick
	} = props;

	const renderActive = (isActive) => {
		console.log(isActive)
		return isActive ? css.active : '';
	}

	const renderDot = (isActive) => {
		return isActive ? '' : 'd-0'
	}

	return (
		<div onClick={onClick} className={`${css.networkItem} ${renderActive(active)}`}>
			<img src={content?.img} alt={content?.text} />
			<div className={css.networkItem__text}>
				{content?.text}
			</div>
			<div className={`${css.networkItem__dot} ${renderDot(active)}`}>
				<GoDotFill />
			</div>
		</div>
	)
}

export default NetworkItem