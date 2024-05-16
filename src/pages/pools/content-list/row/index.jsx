import css from './row.module.scss';
import { MdOutlineCalculate } from "react-icons/md";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { RxStopwatch } from "react-icons/rx";
import Card, { cardType } from 'src/components/card';
import ArrowSquareIcon from 'src/assets/icons/arrow-square.icon';
import { NavLink } from 'react-router-dom';
import Pill, { pillType } from 'src/components/pill';
import { LuRotateCw } from "react-icons/lu";
import { FaRegCircleQuestion } from "react-icons/fa6";
import Button, { buttonClassesType } from 'src/components/button';

function Row() {
	return (
		<>
			<div className={css.row}>
				<div className={css.row__firstCell}>
					<div className={css.row__firstCell__left}>
						<div className={css.row__firstCell__large}>
							<img src="https://tokens.pancakeswap.finance/images/0x21ac3bB914f90A2Bb1a16088E673a9fdDa641434.png" alt="dk" />
						</div>
						<div className={css.row__firstCell__small}>
							<img src="https://tokens.pancakeswap.finance/images/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png" alt="dk" />
						</div>
					</div>
					<div className={css.row__firstCell__right}>
						<div className={css.row__firstCell__title}>
							Earn PEPE
						</div>
						<div className={css[`row--text`]}>
							Stake CAKE
						</div>
					</div>
				</div>
				<div className={css.row__secondCell}>
					<div className={css[`row--text`]}>PEPE Earned</div>
					<div className={css[`row--disableBold`]}>
						0
					</div>
					<div className={css[`row--disable`]}>
						0 USD
					</div>
				</div>
				<div className={css.row__thirdCell}>
					<div className={css[`row--text`]}>
						Total staked
					</div>
					<div className={css[`row--textMain`]}>
						5,989,107 CAKE
					</div>
				</div>
				<div className={css.row__fourthCell}>
					<div className={css[`row--text`]}>APR</div>
					<div className={css[`row--textMain`]}>
						2.22%
						<span className={css.row__fourthCell__icon}>
							<MdOutlineCalculate />
						</span>
					</div>
				</div>
				<div className={css.row__fifthCell}>
					<div className={css[`row--text`]}>Ends in</div>
					<div className={css[`row--textLarge`]}>
						15 days
						<RxStopwatch />
					</div>
				</div>
				<div className={css.row__lastCell}>
					<span className={css.row__lastCell__text}>
						Detail
					</span>
					<FaAngleDown />
					<span className='d-0'>
						<span className={css.row__lastCell__text}>
							Hide
						</span>
						<FaAngleUp />
					</span>
				</div>
			</div>
			<div className={css.detail}>
				<div className={css.detail__left}>
					<div className={css.detail__row}>
						<div className={css.detail__row__title}>
							APR:
						</div>
						<div className={`${css[`row--textMain`]} ${css.detail__row__value}`}>
							2.23%
							<MdOutlineCalculate />
						</div>
					</div>
					<div className={css.detail__row}>
						<div className={css.detail__row__title}>
							Ends in:
						</div>
						<div className={css[`row--textLarge`]}>
							15 days
							<RxStopwatch />
						</div>
					</div>
					<div>
						<NavLink>
							See Token Info
							<ArrowSquareIcon />
						</NavLink>
					</div>
					<div>
						<NavLink>
							View Project Site
							<ArrowSquareIcon />
						</NavLink>
					</div>
					<div>
						<NavLink>
							View Contract
							<ArrowSquareIcon />
						</NavLink>
					</div>
					<div>
						<NavLink>
							Add to wallet
							<ArrowSquareIcon />
						</NavLink>
					</div>
					<div className='flex items-center gap-1'>
						<Pill
							className={css.detail__pill}
							type={pillType.outline}
						>
							<LuRotateCw />
							Manual
						</Pill>
						<FaRegCircleQuestion />
					</div>
				</div>
				<div className={css.detail__right}>
					<Card
						className={css.detail__right__card}
						classNameContent={css.detail__right__cardContent}
					>
						<div className={css.detail__right__title}>
							<span>
								PEPE
							</span>
							{" "}
							EARNED
						</div>
						<div className={css.detail__right__row}>
							<div>
								<div className={css[`row--disableBold`]}>
									0
								</div>
								<div className={css['row--disable']}>
									0 USD
								</div>
							</div>
							<div>
								<Button type={buttonClassesType.disaled}>Harvet</Button>
							</div>
						</div>
					</Card>
					<Card
						className={css.detail__right__card}
						classNameContent={css.detail__right__cardContent}
					>
						<div className={css.detail__right__title}>
							ENABLE POOL
						</div>
						<Button
							type={buttonClassesType.outline}
							className={'w-100'}
						>
							Enable
						</Button>
					</Card>
				</div>
			</div >
		</>
	)
}

export default Row