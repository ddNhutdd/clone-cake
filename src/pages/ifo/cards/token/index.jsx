import css from './token.module.scss';
import PancakeUnknow from 'icons/pancake-unknow.icon';

function Token() {
	return (
		<div className={css.token}>
			<div className={css.token__header}>
				<div className={css.token__header__item}>
					<div className={css.token__title}>
						Token Vesting
					</div>
					<div className={css.token__small}>
						You have no tokens available for claiming
					</div>
				</div>
				<div className={css.token__header__item}>
					<img src={`https://pancakeswap.finance/images/ifos/vesting/not-tokens.svg`} alt="pancake" />
				</div>
			</div>
			<div className={css.token__body}>
				<div className={css.token__body__image}>
					<PancakeUnknow />
				</div>
				<div className={css.token__body__main}>
					<div className={css.token__body__title}>
						You have no tokens available for claiming
					</div>
					<div className={css.token__body__small}>
						Participate in our next IFO. and remember to lock your CAKE to increase your allocation!
					</div>
					<div className={`--link ${css.token__body__navigate}`}>
						How does it work? »
					</div>
				</div>
			</div>
		</div>
	)
}

export default Token