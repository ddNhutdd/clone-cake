import Card from 'src/components/card';
import css from './share.module.scss';
import PancakeFaceIcon from 'icons/pancake-face.icon'
import { useTheme } from 'src/context/dark-theme';

function Share() {
	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.share} ${darkClass}`}>
			<div className={css.container}>
				<div className={css.share__logo}>
					<PancakeFaceIcon />
				</div>
				<div className={css.share__header}>
					<div>
						Good things
					</div>
					<div>
						are meant to be shared
					</div>
				</div>
				<div className={css.share__text}>
					Together we can make the PancakeSwap community even stronger
				</div>
				<div className={css.share__question}>
					How do you Become a PancakeSwap Affiliate?
				</div>
				<div className={css.share__cards}>
					<Card
						className={css.share__card}
					>
						<div className={css[`share__cards--puple`]}>1</div>
						<div>Submit</div>
						<div className={css[`share__cards--puple`]}>Your</div>
						<div className={css[`share__cards--puple`]}>Application</div>
						<div className={css.share__cards__text}>
							It's fast, easy, and completely free
						</div>
					</Card>
					<Card
						className={css.share__card}
					>
						<div className={css[`share__cards--sky`]}>2</div>
						<div>Share</div>
						<div className={css[`share__cards--sky`]}>Your</div>
						<div className={css[`share__cards--sky`]}>Love</div>
						<div className={css.share__cards__text}>
							Share your unique affiliate link with your friends, followers, and anyone who loves a good adventure
						</div>
					</Card>
					<Card
						className={css.share__card}
					>
						<div className={css[`share__cards--pink`]}>3</div>
						<div>Start</div>
						<div>Earning</div>
						<div className={css[`share__cards--pink`]}>CAKE</div>
						<div className={css.share__cards__text}>
							Earn up to 20% referral commissions in CAKE
						</div>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default Share