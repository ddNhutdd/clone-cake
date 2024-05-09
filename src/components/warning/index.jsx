import css from './warning.module.scss';
import WarningIcon from 'icons/warning.icon'

function Warning() {
	return (
		<div className={css.warning}>
			<div className={css.warning__icon}> 
				<WarningIcon />
			</div>
			<div className={css.warning__text}>
				The markets for some of the newer and low-cap tokens displayed on the v2 info page are highly volatile, and as a result, token information may not be accurate.
				{" "}
				<span>
					Before trading any token, please DYOR, and pay attention to the risk scanner.
				</span>
			</div>
		</div>
	)
}

export default Warning