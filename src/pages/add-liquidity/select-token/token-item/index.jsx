import css from './token-item.module.scss';
import { FaArrowRight } from "react-icons/fa6";

function TokenItem(props) {
	const {
		img,
		tokenName,
		tokenFullName,
		className,
		disabled
	} = props;

	const renderDisabled = () => {
		return disabled ? css.disabled : '';
	}

	return (
		<div className={`${css.tokenItem} ${renderDisabled()} ${className}`}>
			<div>
				<img src={img} alt={tokenName} />
			</div>
			<div className={css.tokenItem__main}>
				<div>
					{tokenName}
				</div>
				<div>
					{tokenFullName}
				</div>
			</div>
			<div>
				<FaArrowRight />
			</div>
		</div>
	)
}

export default TokenItem