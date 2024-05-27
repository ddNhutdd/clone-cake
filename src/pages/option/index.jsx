import ChartContainer from './chart-container';
import List from './list';
import css from './option.module.scss';
import RightTop from './right-top';

function Option() {
	return (
		<div className={css.option}>
			<div className={css.container}>
				<div className={css.option__left}>
					<div className={css.option__leftItem}>
						<ChartContainer />
					</div>
					<div className={css.option__leftItem}>
						<List />
					</div>
					<div className={css.option__leftItem}>
						Position
					</div>
				</div>
				<div className={css.option__right}>
					<div className={css.option__right__top}>
						<RightTop />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Option;