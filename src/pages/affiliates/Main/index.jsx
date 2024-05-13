import Button, { buttonClassesType } from 'src/components/button';
import css from './main.module.scss';
import backgroundFooter from 'src/assets/imgs/svgexport-15.svg';
import useMediaQuery, { widthDevice } from 'src/hooks/useMedia';

function Main() {
	// use media
	const screen = useMediaQuery();
	const maxWidth768 = screen === widthDevice.width_576 || screen === widthDevice.width_768 ? true : false;

	return (
		<div className={css.main}>
			<div className={css.container}>
				<div className={css.main__content}>
					<div className={css.main__content__left}>
						<img src="/src/assets/imgs/banner.webp" alt="banner" />
					</div>
					<div className={css.main__content__right}>
						<div className={css.main__content__right__header}>
							Affiliate with us, Empower DeFi
						</div>
						<div className={css.main__content__right__text}>
							Join a community-driven movement to make DeFi accessible and better for everyone
						</div>
						<div className={css.main__content__right__actions}>
							<Button>
								Join our Affiliate Program
							</Button>
							<Button
								type={buttonClassesType.outline}
							>
								Discover your Potential
							</Button>
						</div>
					</div>
				</div>
				<div className={css.main__backgroundImage}>
					<img className={css.main__dialog} src="https://pancakeswap.finance/images/affiliates-program/bobbing-1.png" alt="bobbing-1" />
					<img className={css.main__rightPlan} src="https://pancakeswap.finance/images/affiliates-program/bobbing-3.png" alt="bobbing-2.png" />
					{
						maxWidth768 && <img className={css.main__bottomPlan} src="https://pancakeswap.finance/images/affiliates-program/bobbing-2.png" alt="bobbing-3.png" />
					}
				</div>
			</div>
			<img
				className={css.main__backgroundFooter}
				src={backgroundFooter}
				alt="main"
			/>
		</div>
	)
}

export default Main