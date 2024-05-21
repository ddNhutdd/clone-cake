import css from './grid-view.module.scss';
import Item from './item';

function GridView() {
	return (
		<div className={css.gridView}>
			<div className={css.container}>
				<div className={css.gridView__list}>
					<div className={css.gridView__item}>
						<Item />
					</div>
					<div className={css.gridView__item}>
						<Item />
					</div>
					<div className={css.gridView__item}>
						<Item />
					</div>
					<div className={css.gridView__item}>
						<Item />
					</div>
				</div>
			</div>
		</div>
	)
}

export default GridView