import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaRegCircleQuestion } from "react-icons/fa6";
import { IoRocket } from "react-icons/io5";
import { MdOutlineCalculate } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ArrowSquareIcon from "src/assets/icons/arrow-square.icon";
import BscscanIcon from "src/assets/icons/bscscan.icon";
import PancakeOutlineIcon from 'src/assets/icons/pancake-outline.icon';
import Button from 'src/components/button';
import Card from 'src/components/card';
import Pill, { pillType } from 'src/components/pill';
import css from './item.module.scss';

function Item() {
	// toggle detail
	const [showDetail, setShowDetail] = useState(false);
	const toggleDetail = () => {
		setShowDetail(state => !state);
	}

	return (
		<Card
			className={css.item__card}
			classNameContent={css.item__cardContent}
		>
			<div className={css.item__cardContent__header}>
				<div className={css.item__cardContent__image}>
					<img src="https://tokens.pancakeswap.finance/images/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png" alt="dk" />
					<img src="https://tokens.pancakeswap.finance/images/0x07715EE7219B07b8e01CC7d2787f4e5e75860383.png" alt="dk" />
				</div>
				<div className={css.item__cardContent__header__content}>
					<div className={css.item__cardContent__header__textConainer}>
						<div>
							SDT-WBNB
						</div>
						<div>
							(DEFIEDGE#4)
						</div>
					</div>
					<div className={css.item__cardContent__header__pillContainer}>
						<Pill
							type={pillType.outline}
							className={css.item__cardContent__header__pill}
						>
							0.25%
						</Pill>
						<Pill
							type={pillType.outline}
							className={css.item__cardContent__header__pill}
						>
							<IoRocket />
							Booster
						</Pill>
					</div>
				</div>
			</div>
			<div className={css.item__cardContent__row}>
				<div>
					APR:
				</div>
				<div className={css.item__cardContent__row__first}>
					<IoRocket />
					<span>
						Up to
					</span>
					<span>
						381.30%
					</span>
					<span>
						142.92%
					</span>
					<MdOutlineCalculate />
				</div>
			</div>
			<div className={css.item__cardContent__row}>
				<div>
					Earn:
				</div>
				<div>
					CAKE + Fees
				</div>
			</div>
			<div className={css.item__cardContent__row}>
				<div>
					Reward/Day:
				</div>
				<div>
					<Pill
						type={pillType.outline}
						className={css.item__cardContent__rewardPill}
					>
						<PancakeOutlineIcon />
						85,97 CAKE
					</Pill>
				</div>
			</div>
			<div className={`${css.item__cardContent__title} ${css[`item__card--title`]}`}>
				MANAGED BY
			</div>
			<div className={css.item__cardContent__hightLight}>
				DefiEdge
			</div>
			<div className={css[`item__card--text`]}>
				With
				<span>
					Automated Liquidity Optimization
				</span>
				strategy
			</div>
			<Card
				className={css.item__cardChild}
				classNameContent={css.item__cardChildContent}
			>
				<div className={css[`item__card--title`]}>
					START EARNING
				</div>
				<Button className={`w-100`}>
					Add Liquidity
				</Button>
				<div className={css.item__cardContent__line} />
				<div className={css.item__cardContent__boost}>
					<div className={css.item__cardContent__boost__left}>
						<div className={css[`item__card--title`]}>
							YIELD BOOSTER
						</div>
						<div className={css.item__cardContent__boost__text}>
							Up to 3x
							<FaRegCircleQuestion />
						</div>
						<div className={css[`item__card--text`]}>
							Start staking to activate yield booster.
						</div>
					</div>
					<div className={css.item__cardContent__boost__right}>
						<Button>
							Go to Lock
						</Button>
					</div>
				</div>
			</Card>
			<div onClick={toggleDetail} className={css.item__cardContent__toggleButton}>
				{
					showDetail ? (
						<>
							Hide
							<FaAngleUp />
						</>
					) : (
						<>
							Info
							<FaAngleDown />
						</>
					)
				}
			</div>
			{
				showDetail && (
					<div className={css.item__cardContent__detail}>
						<div className={css.item__cardContent__detail__row}>
							<div>
								Total staked:
							</div>
							<div>
								$73,015.51
							</div>
						</div>
						<div className={css.item__cardContent__detail__row}>
							<div>
								Farming Rewards:
							</div>
							<div>
								~0.000995 CAKE / second
							</div>
						</div>
						<div className={css.item__cardContent__detail__row}>
							<div>
								Manager Fee:
							</div>
							<div>
								0%
							</div>
						</div>
						<div className={css.item__cardContent__detail__row}>
							<NavLink>
								Manager Info
								<ArrowSquareIcon />
							</NavLink>
						</div>
						<div className={css.item__cardContent__detail__row}>
							<NavLink>
								Strategy Info
								<ArrowSquareIcon />
							</NavLink>
						</div>
						<div className={css.item__cardContent__detail__row}>
							<NavLink>
								View Manager Address
								<BscscanIcon />
							</NavLink>
						</div>
						<div className={css.item__cardContent__detail__row}>
							<NavLink>
								View Vault Contract
								<BscscanIcon />
							</NavLink>
						</div>
					</div>
				)
			}
		</Card >
	)
}

export default Item