import css from './bottom.module.scss';
import { IoRocket } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import Button, { buttonClassesType } from 'src/components/button';
import Card from 'src/components/card';

function Bottom() {
	return (
		<div className={css.bottom}>
			<div className={css.container}>
				<div className={css.bottom__left}>
					<div className={css.bottom__left__header}>
						Position Manager
					</div>
					<div className={css.bottom__left__text}>
						Automate your PancakeSwap V3 liquidity
					</div>
				</div>
				<div className={css.bottom__right}>
					<div className={css.bottom__right__image}>
						<img src="/src/assets/imgs/boosterCardImagePM.webp" alt="dk" />
					</div>
					<Card
						className={css.bottom__right__card}
						classNameContent={css.bottom__right__content}
					>
					<div className={css.bottom__right__header}>
						<IoRocket />
						<div>
							Yield Booster
						</div>
						<FaRegCircleQuestion />
					</div>
					<div className={css.bottom__right__line} />
					<div className={css.bottom__right__title}>
						No CAKE locked
					</div>
					<div className={css.bottom__right__text}>
						An active veCAKE staking position is required for activating farm yield boosters.
					</div>
					<div className={css.bottom__right__action}>
						<Button
							type={buttonClassesType.primaryPuple}
						>
							Go to CAKE Staking
						</Button>
					</div>
				</Card>
			</div>
		</div>
		</div >
	)
}

export default Bottom