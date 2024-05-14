import css from './benefit.module.scss';
import PancakeFaceIcon from 'src/assets/icons/pancake-face.icon';

function Benefit() {
	return (
		<div className={css.benefit}>
			<div className={css.container}>
				<div className={css.benefit__logo}>
					<PancakeFaceIcon />
				</div>
				<div className={css.benefit__header}>
					Unlock the Power of PancakeSwap Affiliate Benefits
				</div>
				<div className={css.benefit__row}>
					<div className={css.benefit__row__img}>
						<img src="src/assets/imgs/partner.webp" alt="dk" />
					</div>
					<div className={css.benefit__row__content}>
						<div className={css.benefit__row__content__header}>
							Partner with the Leading Brand in the Industry
						</div>
						<div className={css.benefit__row__content__text}>
							Forge a partnership with the most reputable global brand in the industry to make DeFi accessible and better for everyone
						</div>
					</div>
				</div>
				<div className={css.benefit__row}>
					<div className={css.benefit__row__content}>
						<div className={css.benefit__row__content__header}>
							User Friendly Platform
						</div>
						<div className={css.benefit__row__content__text}>
							Provide a seamless experience for your referrals with our user friendly platform
						</div>
					</div>
					<div className={css.benefit__row__img}>
						<img src="src/assets/imgs/user-friendly-platform.webp" alt="dk" />
					</div>
				</div>
				<div className={css.benefit__row}>
					<div className={css.benefit__row__img}>
						<img src="src/assets/imgs/profit-sharing.webp" alt="dk" />
					</div>
					<div className={css.benefit__row__content}>
						<div className={css.benefit__row__content__header}>
							Customize Profit-Sharing
						</div>
						<div className={css.benefit__row__content__text}>
							Share the rewards with your community
						</div>
					</div>
				</div>
				<div className={css.benefit__row}>
					<div className={css.benefit__row__content}>
						<div className={css.benefit__row__content__header}>
							Real-Time Reporting
						</div>
						<div className={css.benefit__row__content__text}>
							Easily keep tabs on commission and earnings with our user-friendly dashboard
						</div>
					</div>
					<div className={css.benefit__row__img}>
						<img src="src/assets/imgs/real-time-reporting.webp" alt="dk" />
					</div>
				</div>
				<div className={css.benefit__row}>
					<div className={css.benefit__row__img}>
						<img src="src/assets/imgs/personalized-support.webp" alt="dk" />
					</div>
					<div className={css.benefit__row__content}>
						<div className={css.benefit__row__content__header}>
							Personalized Support
						</div>
						<div className={css.benefit__row__content__text}>
							Personalized assistance from our community managers
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Benefit