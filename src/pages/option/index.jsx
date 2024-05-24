import css from './option.module.scss';
import RightTop from './right-top';

function Option() {
	return (
		<div className={css.option}>
			<div className={css.option__left}>

			</div>
			<div className={css.option__right}>
				<div className={css.option__right__top}>
					<RightTop />
				</div>
			</div>
		</div>
	)
}

export default Option;