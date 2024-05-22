import { useContext, useState } from "react";
import { FaAngleDown, FaAngleUp, FaRegCircleQuestion } from "react-icons/fa6";
import { IoRocket } from "react-icons/io5";
import { MdOutlineCalculate } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ArrowSquareIcon from "src/assets/icons/arrow-square.icon";
import BscscanIcon from "src/assets/icons/bscscan.icon";
import PancakeOutlineIcon from 'src/assets/icons/pancake-outline.icon';
import Button from "src/components/button";
import Card from "src/components/card";
import Pill, { pillType } from 'src/components/pill';
import { useTheme } from "src/context/dark-theme";
import { DrillContext } from "src/context/drill";
import css from './row.module.scss';
import { ToolTip } from "src/components/tooltip";
import TootipContent from "../../tootip-content";

function Row(props) {
	const {
		borderBottom = true
	} = props;

	const renderBorderBottom = () => {
		return borderBottom ? css.borderBottom : '';
	}

	// toggle detail
	const [showDetail, setShowDetail] = useState(false);
	const toggleDetail = () => {
		setShowDetail(state => !state);
	}

	// show modal roi
	const { roiModalOpen } = useContext(DrillContext);

	// theme 
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.row}  ${darkClass}`}>
			<div onClick={toggleDetail} className={`${css.row__content} ${renderBorderBottom()}`}>
				<div className={css.row__first}>
					<div className={css.row__first__img}>
						<img src="https://tokens.pancakeswap.finance/images/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png" alt="dk" />
						<img src="https://tokens.pancakeswap.finance/images/0x07715EE7219B07b8e01CC7d2787f4e5e75860383.png" alt="dk" />
					</div>
					<div className={css.row__first__coin}>
						WBNB-rBNB
					</div>
					<div className={css.row__first__name}>
						(DEFIEDGE#4)
					</div>
					<div className={css.row__first__percentContainer} >
						<Pill
							className={css.row__first__percent}
							type={pillType.outline}
						>
							0.25%
						</Pill>
					</div>
					<div>
						<Pill
							className={css.row__first__boost}
							type={pillType.outlineSky}
						>
							<IoRocket />
							Booster
						</Pill>
					</div>
				</div>
				<div className={css.row__second}>
					<div className={css[`row--small`]}>
						APR
					</div>
					<div className={css.row__second__content}>
						<div className={css[`row--success`]}>
							<IoRocket />
						</div>
						<div className={`${css[`row--success`]}`}>
							Up to
						</div>
						<ToolTip
							className={`flex items-center gap-1`}
							content={<TootipContent />}
						>
							<div className={`${css[`row--success`]} ${css[`row--under-dot`]} ${css[`row--600`]}`}>
								385.15%
							</div>
							<div className={`${css[`row--line-through`]} ${css[`row--under-dot`]}`}>
								143.69%
							</div>
						</ToolTip>
						<div>
							<MdOutlineCalculate onClick={roiModalOpen} />
						</div>
					</div>
				</div>
				<div className={css.row__third}>
					<div className={css[`row--small`]}>
						Earn
					</div>
					<div className={css[`row--black`]}>
						CAKE + Fees
					</div>
				</div>
				<div className={css.row__fourth}>
					<div className={css[`row--small`]}>
						Reward Per Day
					</div>
					<div>
						<Pill
							type={pillType.outline}
							className={css[`row--reward-pill`]}
						>
							<div>
								<PancakeOutlineIcon />
							</div>
							<div>85.97 CAKE</div>
						</Pill>
					</div>
				</div>
				<div className={css.row__fifth}>
					<div className={css[`row--small`]}>
						Total Staked
					</div>
					<div className={`${css[`row--black`]}`}>
						$67,621.97
					</div>
				</div>
				<div className={css.row__sixth}>
					{
						showDetail ? <FaAngleUp /> : <FaAngleDown />
					}
				</div>
			</div>
			{
				showDetail && (
					<div className={css.row__detail}>
						<div className={css.row__detail__left}>
							<div className={css.row__detail__row}>
								<div>
									Total staked:
								</div>
								<div>
									$73,227.11
								</div>
							</div>
							<div className={`${css.row__detail__row} ${css.more}`}>
								<div>
									Reward Per Day:
								</div>
								<div>
									<Pill
										type={pillType.outline}
										className={css[`row--reward-pill`]}
									>
										<div>
											<PancakeOutlineIcon />
										</div>
										<div>85.97 CAKE</div>
									</Pill>
								</div>
							</div>
							<div className={`${css.row__detail__row} ${css.more}`}>
								<div>
									Total staked:
								</div>
								<div>
									$73,109.63
								</div>
							</div>
							<div className={css.row__detail__row}>
								<div>
									Farming Rewards:
								</div>
								<div>
									~0.000995 CAKE / second
								</div>
							</div>
							<div className={css.row__detail__row}>
								<div>
									Manager Fee:
								</div>
								<div>
									0%
								</div>
							</div>
							<div className={css.row__detail__row__linkContainer}>
								<div className={css[`row--link`]}>
									<NavLink>
										Manager Info
										<ArrowSquareIcon />
									</NavLink>
								</div>
								<div className={css[`row--link`]}>
									<NavLink>
										Strategy Info
										<ArrowSquareIcon />
									</NavLink>
								</div>
								<div className={css[`row--link`]}>
									<NavLink>
										View Manager Address
										<BscscanIcon />
									</NavLink>
								</div>
								<div className={css[`row--link`]}>
									<NavLink>
										View Vault Contract
										<BscscanIcon />
									</NavLink>
								</div>
							</div>
						</div>
						<div className={css.row__detail__right}>
							<Card
								className={css.row__card}
								classNameContent={css.row__cardContent}
							>
								<div className={css.row__cardTitle}>
									MANAGED BY
								</div>
								<div className={css.row__cardHighLight}>
									DefiEdge
								</div>
								<div className={css.row__cardText}>
									With
									<span>
										Automated Liquidity Optimization
									</span>
									strategy
								</div>
							</Card>
							<Card
								className={css.row__card}
								classNameContent={css.row__cardContent}
							>
								<div className={css.row__cardTitle}>
									START EARNING
								</div>
								<Button>
									Add Liquidity
								</Button>
								<div className={css.row__detail__line} />
								<div className={`flex items-center justify-between flex-wrap`}>
									<div>
										<div className={css.row__cardTitle}>
											YIELD BOOSTER
										</div>
										<div className={css.row__cardUpto}>
											Up to 3x
											<FaRegCircleQuestion />
										</div>
										<div className={css.row__cardText}>
											Start staking to activate yield booster.
										</div>
									</div>
									<div>
										<Button>
											Go to Lock
										</Button>
									</div>
								</div>
							</Card>
						</div>
						<div className={css.row__detail__row__linkContainerBottom}>
							<div className={css[`row--link`]}>
								<NavLink>
									Manager Info
									<ArrowSquareIcon />
								</NavLink>
							</div>
							<div className={css[`row--link`]}>
								<NavLink>
									Strategy Info
									<ArrowSquareIcon />
								</NavLink>
							</div>
							<div className={css[`row--link`]}>
								<NavLink>
									View Manager Address
									<BscscanIcon />
								</NavLink>
							</div>
							<div className={css[`row--link`]}>
								<NavLink>
									View Vault Contract
									<BscscanIcon />
								</NavLink>
							</div>
						</div>
					</div>
				)
			}
		</div >
	)
}

export default Row