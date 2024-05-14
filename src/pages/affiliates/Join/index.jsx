import Button from 'src/components/button';
import css from './join.module.scss';
import { useTheme } from 'src/context/dark-theme';

function Join() {
	// theme 
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<>
			<div className={`${css.join} ${darkClass}`}>
				<div className={css.join__backgroundTop}></div>
				<div className={css.container}>
					<div className={css.join__top}>
						<div className={css.join__header}>
							Join PancakeSwap's Community and Make a Difference
						</div>
						<div className={css.join__text}>
							As an affiliate, you'll be part of a network of like-minded individuals who are committed to build a stronger DeFi community. Be part of something bigger with PancakeSwap's Affiliate program
						</div>
						<div className={css.join__action}>
							<Button>Join Now!</Button>
						</div>
					</div>
					<div className={css.join__bot}>
						<div className={css.subHeading}>
							Commission Structure
						</div>
						<div className={css.join__text}>
							Invite and earn commission for every successful referral
						</div>
						<div className={css.join__bot__list}>
							<div className={css.join__bot__item}>
								<div className={css.join__bot__img}>
									<img src="https://pancakeswap.finance/images/affiliates-program/stableSwap.png" alt="dk" />
								</div>
								<div className={css.join__bot__title}>
									SWAP & STABLESWAP
								</div>
								<div className={css.join__bot__number}>
									3%
								</div>
							</div>
							<div className={css.join__bot__item}>
								<div className={css.join__bot__img}>
									<img src="https://pancakeswap.finance/images/affiliates-program/perpetual.png" alt="dk" />
								</div>
								<div className={css.join__bot__title}>
									V1 PERPETUAL
								</div>
								<div className={css.join__bot__number}>
									20%
								</div>
							</div>
							<div className={css.join__bot__item}>
								<div className={css.join__bot__img}>
									<img src="https://pancakeswap.finance/images/affiliates-program/comming-soon.png" alt="dk" />
								</div>
								<div className={css.join__bot__title}>
									COMING SOON!
								</div>
								<div className={css.join__bot__number}>
									?
								</div>
							</div>
						</div>
					</div>
					<div className={css.join__backgroundImage}>
						<div className={css.join__backgroundImage__topLeft}>
							<img
								src="https://pancakeswap.finance/images/affiliates-program/m-1.png"
								alt="dk"
							/>
						</div>
						<div
							className={css.join__backgroundImage__topRightBlue}
						>
							<img
								src="https://pancakeswap.finance/images/affiliates-program/m-3.png"
								alt="dk"
							/>
						</div>
						<div className={css.join__backgroundImage__topRight}>
							<img
								src="https://pancakeswap.finance/images/affiliates-program/m-4.png"
								alt="dk"
							/>
						</div>
						<div className={css.join__backgroundImage__botRight}>
							<img
								src="https://pancakeswap.finance/images/affiliates-program/m-5.png"
								alt="dk"
							/>
						</div>
						<div className={css.join__backgroundImage__BotLeft}>
							<img
								src="https://pancakeswap.finance/images/affiliates-program/m-2.png"
								alt="dk"
							/>
						</div>
					</div>
				</div>
				<div className={css.join__backgroundBot}></div>
				<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
					<defs>
						<clipPath id="topConcaveCurve" clipPathUnits="objectBoundingBox">
							<path d="M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"></path>
						</clipPath>
					</defs>
				</svg>
				<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="100" height="100"><defs><clipPath id="topConvexCurve" clipPathUnits="objectBoundingBox"><path d="M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z"></path></clipPath></defs></svg>
			</div>
		</>
	)
}

export default Join