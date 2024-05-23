import css from './item.module.scss';

function Item() {
	return (
		<div className={css.item}>
			<div className={css.item__image}>
				<img src="https://icons-ckg.pages.dev/lz-dark/networks/opbnb.svg" alt="dk" />
			</div>
			<div className={css.item__content}>
				<div>
					opBNB Mainnet
				</div>
				<div>
					obnb
				</div>
			</div>
		</div>
	)
}

export default Item;