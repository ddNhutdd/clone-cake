import Card from 'src/components/card';
import css from './first-row.module.scss';
import { FaAngleDown } from "react-icons/fa6";
import Button from 'src/components/button';
import ValueContent from './value-content';
import { useContext, useState } from 'react';
import { MdOutlineCalculate } from "react-icons/md";
import useMediaQuery, { widthDevice } from 'src/hooks/useMedia';
import { DrillContext } from 'src/context/drill';

function FirstRow() {
	// show detail
	const [showDetail, setShowDetail] = useState(true);
	const lastCellClickHandle = () => {
		setShowDetail(state => !state);
	}

	// responsive
	const screen = useMediaQuery();

	// login
	const login = true;

	// modal roi
	const {
		openModal,
		closeModal
	} = useContext(DrillContext);

	return (
		<>
			<div className={css.firstRow}>
				<div className={css.firstRow__firstCell}>
					<div className={css.firstRow__firstCell__left}>
						<div className={css.firstRow__firstCell__left__large}>
							<img src="https://pancakeswap.finance/images/cakeGrey.png" alt="dk" />
						</div>
						<div className={css.firstRow__firstCell__left__small}>
							<img src="https://pancakeswap.finance/images/autorenew-disabled.png" alt="dk" />
						</div>
					</div>
					<div className={css.firstRow__firstCell__right}>
						<div className={css.firstRow__firstCell__right__header}>
							Stake CAKE
						</div>
						{
							(screen !== widthDevice.width_576 ||
								screen === widthDevice.width_576 && !login) &&
							<div className={css.firstRow__firstCell__right__text}>
								This product has been upgraded
							</div>
						}
					</div>
				</div>
				{
					(screen !== widthDevice.width_576 || login) &&
					<div className={css.firstRow__secondCell}>
						{
							!login ?
								<div className={css.firstRow__secondCell__content}>
									<div className={css.firstRow__secondCell__img}>
										<img src="https://pancakeswap.finance/images/cake-staking/token-vecake.png" alt="dk" />
									</div>
									<div className={css.firstRow__secondCell__text}>
										Stake & Lock for veCAKE, to enjoy more rewards & benefit!
									</div>
								</div>
								:
								<>
									<div className={css.firstRow__secondCell__cakeStaked}>
										<div className={css['firstRow--text']}>
											CAKE Staked
										</div>
										<div>
											0
										</div>
										<div>
											0 USD
										</div>
									</div>
									<div className={css.firstRow__secondCell__apy}>
										<div className={css[`firstRow--text`]}>
											Flexible APY
										</div>
										<div className={css[`firstRow--textInfo`]}>
											0%
											{
												screen !== widthDevice.width_576 && <MdOutlineCalculate onClick={openModal} />
											}
										</div>
									</div>
									<div className={css.firstRow__secondCell__apr}>
										<div className={css[`firstRow--text`]}>
											Locked APR
										</div>
										<div className={css[`firstRow--textInfo`]}>
											Up to 0%
											{
												screen !== widthDevice.width_576 && <MdOutlineCalculate onClick={openModal} />
											}
										</div>
									</div>
									<div className={css.firstRow__secondCell__totalStaked}>
										<div className={css[`firstRow--text`]}>
											Total staked
										</div>
										<div className={css[`firstRow--textInfo`]}>
											64,032,062 CAKE
										</div>
									</div>
								</>
						}
					</div>
				}
				<div
					onClick={lastCellClickHandle}
					className={css.firstRow__lastCell}
				>
					<span>
						{
							showDetail ? 'Hide' : 'Details'
						}
					</span>
					<FaAngleDown />
				</div>
			</div >
			{
				showDetail && <div className={css.hidenContent}>
					<div className={css.hidenContent__left}>
						{
							login ?
								<div className={css.hidenContent__valueContent}>
									<ValueContent />
								</div>
								:
								<div className={css.hidenContent__mainImage}>
									<img src="src/assets/imgs/veCakeBunny.webp" alt="dk" />
								</div>
						}
					</div>
					<div className={css.hiddenContent__right}>
						<Card
							className={css.hiddenContent__right__cardLeftCutom}
							classNameContent={css.hiddenContent__right__cardLeft}
						>
							<Card
								className={css.hiddenContent__cardItem}
								classNameContent={css.hiddenContent__cardItem__container}
							>
								<div className={css.hiddenContent__cardItem__contentContainer}>
									<div className={css.hidenContent__cartItem__image}>
										<img src="https://pancakeswap.finance/images/cake-staking/benefit-earn-cake.png" alt="dk" />
									</div>
									<div className={css.hidenContent__cartItem__content}>
										<div className={css.hiddenContent__cardItem__header}>
											Earn CAKE
										</div>
										<div className={css.hiddenContent__cardItem__text}>
											Total Distributed
										</div>
										<div className={css.hiddenContent__cardItem__value}>
											1,247,348.68 CAKE
										</div>
									</div>
								</div>
							</Card>
							<Card
								className={css.hiddenContent__cardItem}
								classNameContent={css.hiddenContent__cardItem__container}
							>
								<div className={css.hiddenContent__cardItem__contentContainer}>
									<div className={css.hidenContent__cartItem__image}>
										<img src="https://pancakeswap.finance/images/cake-staking/benefit-gauges-voting.png" alt="dk" />
									</div>
									<div className={css.hidenContent__cartItem__content}>
										<div className={css.hiddenContent__cardItem__header}>
											Gauges Voting
										</div>
										<div className={css.hiddenContent__cardItem__text}>
											Number of Gauges to Vote
										</div>
										<div className={css.hiddenContent__cardItem__value}>
											400
										</div>
									</div>
								</div>
							</Card>
							<Card
								className={css.hiddenContent__cardItem}
								classNameContent={css.hiddenContent__cardItem__container}
							>
								<div className={css.hiddenContent__cardItem__contentContainer}>
									<div className={css.hidenContent__cartItem__image}>
										<img src="https://pancakeswap.finance/images/cake-staking/benefit-earn-cake.png" alt="dk" />
									</div>
									<div className={css.hidenContent__cartItem__content}>
										<div className={css.hiddenContent__cardItem__header}>
											Earn CAKE
										</div>
										<div className={css.hiddenContent__cardItem__text}>
											Total Distributed
										</div>
										<div className={css.hiddenContent__cardItem__value}>
											1,247,348.68 CAKE
										</div>
									</div>
								</div>
							</Card>
							<Card
								className={css.hiddenContent__cardItem}
								classNameContent={css.hiddenContent__cardItem__container}
							>
								<div className={css.hiddenContent__cardItem__last}>
									<div className={css.hiddenContent__cardItem__last__content}>
										<div className={css.hidenContent__cartItem__image}>
											<img src="https://pancakeswap.finance/images/cake-staking/benefit-snapshot-voting.png" alt="dk" />
										</div>
										<div className={css.hiddenContent__cardItem__header}>
											Snapshot Voting
										</div>
									</div>
									<div className={css.hiddenContent__cardItem__last__content}>
										<div className={css.hidenContent__cartItem__image}>
											<img src="https://pancakeswap.finance/images/cake-staking/benefit-ifo.png" alt="dk" />
										</div>
										<div className={css.hidenContent__cartItem__content}>
											<div className={css.hiddenContent__cardItem__header}>
												IFO and more
											</div>
										</div>
									</div>
								</div>
							</Card>
						</Card>
						<Card
							className={css.hiddenContent__right__cardRight}
							classNameContent={css.hiddenContent__right__cardRight__content}
						>
							<div className={css.hiddenContent__right__cardRight__text}>
								STAKE & LOCK FOR VECAKE, TO ENJOY MORE REWARDS & BENEFIT!
							</div>
							<Button className={css.hiddenContent__right__cardRight__button}>
								Get veCAKE now!
							</Button>
						</Card>
					</div>
				</div >
			}
		</>
	)
}

export default FirstRow