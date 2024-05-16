import Pill, { pillType } from 'src/components/pill';
import css from './footer.module.scss';
import { HiArrowPath } from "react-icons/hi2";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { ToolTip } from 'src/components/tooltip';
import { FaRegCircleQuestion } from "react-icons/fa6";
import { GiClockwiseRotation } from "react-icons/gi";
import { MdOutlineCalculate } from "react-icons/md";
import { CiStopwatch } from "react-icons/ci";
import ArrowSquareIcon from 'src/assets/icons/arrow-square.icon';
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DrillContext } from 'src/context/drill';

function Footer(props) {
	const {
		isFirstItem = false
	} = props;

	// show detail
	const [showDetail, setShowDetail] = useState(false);
	const toggleDetail = () => {
		setShowDetail(state => !state);
	}

	// modal calculator
	const { openModal } = useContext(DrillContext);

	return (
		<div className={css.footer}>
			<div className={`${css.footer__row} ${css.first}`}>
				<div className={css.footer__pillContainer}>
					{
						isFirstItem ?
							<>
								<Pill
									type={pillType.outline}
									className={css.footer__autoPill}
								>
									<HiArrowPath />
									Auto
								</Pill>
								<ToolTip
									content="Rewards are distributed and included in your total staking balance."
									className={`flex items-center`}
								>
									<FaRegCircleQuestion />
								</ToolTip>
							</> :
							<>
								<Pill
									type={pillType.outline}
									className={css.footer__manualPill}
								>
									<GiClockwiseRotation />
									Manual
								</Pill>
								<ToolTip
									content="Rewards are distributed and included in your total staking balance."
									className={`flex items-center`}
								>
									<FaRegCircleQuestion />
								</ToolTip>
							</>
					}
				</div>
				<div>
					{
						showDetail ?
							<div onClick={toggleDetail} className={css.footer__toggleButton}>
								Hide
								<FaAngleUp />
							</div>
							:
							<div onClick={toggleDetail} className={css.footer__toggleButton}>
								Details
								<FaAngleDown />
							</div>
					}
				</div>
			</div>
			{
				showDetail && <>
					{
						isFirstItem ?
							<>
								<div className={css.footer__row}>
									<div>
										<ToolTip
											content="Total amount of CAKE staked in this pool"
											className={css[`footer--underline-dash`]}
										>
											Total staked:
										</ToolTip>
									</div>
									<div>
										63,727,394 CAKE
									</div>
								</div>
								<div className={css.footer__row}>
									<div>Total locked:</div>
									<div>57,179,522 CAKE</div>
								</div>
								<div className={css.footer__row}>
									<div>
										<ToolTip
											content="The average lock duration of all the locked staking positions of other users"
											className={css[`footer--underline-dash`]}
										>
											Average lock duration:
										</ToolTip>
									</div>
									<div>50 weeks</div>
								</div>
							</>
							:
							<>
								<div className={css.footer__row}>
									<div>APR:</div>
									<div className={css.footer__calcContainer}>
										2.26%
										<MdOutlineCalculate onClick={openModal} />
									</div>
								</div>
								<div className={css.footer__row}>
									<div>
										<ToolTip
											content="Total amount of CAKE staked in this pool"
											className={css[`footer--underline-dash`]}
										>
											Total staked:
										</ToolTip>
									</div>
									<div>5,994,749 CAKE</div>
								</div>
								<div className={css.footer__row}>
									<div>Ends in:</div>
									<div className={css.footer__row__timeContainer}>
										15 days
										<CiStopwatch />
									</div>
								</div>
							</>
					}
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
							View Contact
							<ArrowSquareIcon />
						</NavLink>
					</div>
					<div>
						<NavLink>
							Add to Wallet
						</NavLink>
					</div>
				</>
			}

		</div>
	)
}

export default Footer