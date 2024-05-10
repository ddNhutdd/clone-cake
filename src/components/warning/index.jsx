import css from './warning.module.scss';

function Warning(props) {
	const {
		icon,
		children
	} = props;

	return (
		<div className={css.warning}>
			<div className={css.warning__icon}>
				{icon}
			</div>
			<div className={css.warning__text}>
				{children}
			</div>
		</div>
	)
}

export default Warning