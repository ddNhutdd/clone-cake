import css from './screen-small.module.scss';
import PancakeUnknowIcon from 'src/assets/icons/pancake-unknow.icon';

function Item(props) {
	const {
		showMyRankText = false
	} = props;
	return (
		<div className={css.item}>
			<div className={css.item__row}>
				<div className={css[`item--largeBold`]}>
					{
						showMyRankText && <div>
							My Rank
						</div>
					}
					<div>
						--
					</div>
				</div>
				<div className={css.item__iconContainer}>
					<span className={css.item__iconContainer__address}>
						0x6a...7b01
					</span>
					<PancakeUnknowIcon />
				</div>
			</div>
			<div className={css.item__row}>
				<div className={css[`item--smallTitle`]}>
					Total Reward
				</div>
				<div className={css.item__row__value}>
					<div className={css[`item--value`]}>
						$0.00
					</div>
					<div className={css[`item--smallTitle`]}>
						~0.00 CAKE
					</div>
				</div>
			</div>
			<div className={css.item__row}>
				<div className={css[`item--smallTitle`]}>
					Trading Volume
				</div>
				<div className={`${css.item__row__value} ${css[`item--valueBold`]}`}>
					$0.00
				</div>
			</div>
		</div >
	)
}

export default Item