import PancakeGrowIcon from 'src/assets/icons/pancake-grow.icon';
import css from './screen-large.module.scss';

function ScreenLarge() {
	return (
		<div className={css.screenLarge}>
			<div className={css.screenLarge__header}>
				<div className={css.screenLarge__row}>
					<div className={css.screenLarge__cell}>
						MY RANK
					</div>
					<div className={css.screenLarge__cell}>
						TRADING VOLUME
					</div>
					<div className={css.screenLarge__cell}>
						TOTAL REWARD
					</div>
				</div>
			</div>
			<div className={css.screenLarge__body}>
				<div className={css.screenLarge__row}>
					<div className={css.screenLarge__cell}>
						<div>
							<div>--</div>
							<div><PancakeGrowIcon /></div>
							<div>0x6a...7b01</div>
						</div>
					</div>
					<div className={css.screenLarge__cell}>
						$0.00
					</div>
					<div className={css.screenLarge__cell}>
						<div>
							$0.00
						</div>
						<div>
							~0.00 CAKE
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ScreenLarge