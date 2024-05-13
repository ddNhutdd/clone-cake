import css from './join.module.scss';

function Join() {
	return (
		<div className={css.join}>
			<div className={css.container}>
				<div className={css.join__header}>
					Join PancakeSwap's Community and Make a Difference
				</div>
				<div className={css.join__text}>
					As an affiliate, you'll be part of a network of like-minded individuals who are committed to build a stronger DeFi community. Be part of something bigger with PancakeSwap's Affiliate program
				</div>
				<div className={css.join__action}>
					<Button>Join Now!</Button>
				</div>
				<div className={css.subHeading}>
					Commission Structure
				</div>
				<div className={css.join__text}>
					Invite and earn commission for every successful referral
				</div>
				<div className={css.join__info}>
					<div className={css.join__info__item}>
						<img src="https://pancakeswap.finance/images/affiliates-program/stableSwap.png" alt="dk" />
						<div className={css.join__info__title}>
							SWAP & STABLESWAP
						</div>
						<div className={css.join__info__number}>
							3%
						</div>
					</div>
					<div className={css.join__info__item}>
						<img src="https://pancakeswap.finance/images/affiliates-program/perpetual.png" alt="dk" />
						<div className={css.join__info__title}>
							V1 PERPETUAL
						</div>
						<div className={css.join__info__number}>
							20%
						</div>
					</div>
					<div className={css.join__info__item}>
						<img src="https://pancakeswap.finance/images/affiliates-program/comming-soon.png" alt="dk" />
						<div className={css.join__info__title}>
							COMING SOON!
						</div>
						<div className={css.join__info__number}>
							?
						</div>
					</div>
				</div>
				<div className={css.join__backgroundImage}>

				</div>
			</div>
		</div>
	)
}

export default Join