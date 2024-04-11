import React, {useState} from 'react';
import css from './add-liquidity.module.scss';
import {FaArrowLeft} from 'react-icons/fa';
import {AiOutlineCalculator} from 'react-icons/ai';
import {FaRegQuestionCircle} from 'react-icons/fa';
import {IoMdSettings} from 'react-icons/io';
import {FaAngleDown} from 'react-icons/fa6';
import Input from 'src/components/input';
import staking2 from 'src/assets/imgs/staking-2.png';
import staking1 from 'src/assets/imgs/staking-1.png';
import {FaArrowRightArrowLeft} from 'react-icons/fa6';
import {LuMinusCircle} from 'react-icons/lu';
import {FiPlusCircle} from 'react-icons/fi';
import Tabs2 from 'src/components/tabs-2';
import Button, {buttonClassesType} from 'src/components/button';
import Card from 'src/components/card';
import FooterComponent from 'src/components/footer-component';
import {FaCaretDown} from 'react-icons/fa';
import Pill from 'src/components/pill';
import CopyButton from 'src/components/copy-button';
import {ToolTip, tooltipPosition} from 'src/components/tooltip';
import PillSquare from 'src/components/pill-square';
import Tabs from 'src/components/tabs';

export default function AddLiquidity() {
	// range tab
	const rangeListTab = [
		{
			id: 1,
			content: '10%',
			value: '10',
		},
		{
			id: 2,
			content: '20%',
			value: '20',
		},
		{
			id: 3,
			content: '50%',
			value: '50',
		},
		{
			id: 4,
			content: 'Full Range',
			value: 'full',
		},
	];
	const [rangeSelected, setRangeSelected] = useState(rangeListTab.at(0));
	const rangeChangeHandle = (item) => setRangeSelected(item);

	return (
		<div className={css.addLiquidity}>
			<div className={css.container}>
				<Card className={css.addLiquidity__card}>
					<div className={css.addLiquidity__header}>
						<div className={css.addLiquidity__header__left}>
							<FaArrowLeft />
							Add V3 Liquidity
						</div>
						<div className={css.addLiquidity__header__right}>
							<div className={css.addLiquidity__small}>
								APR (with farming)
							</div>
							<div className={css.addLiquidity__listActions}>
								<div>14.32%</div>
								<AiOutlineCalculator />
								<ToolTip
									position={tooltipPosition.bottom}
									content={
										<div className={`flex flex-col gap-2`}>
											<p>
												This position must be staking in
												farm to apply the combined APR
												with farming rewards.
											</p>
											<p>
												Calculated at the current rates
												with historical trading volume
												data, and subject to change
												based on various external
												variables.
											</p>
											<p>
												This figure is provided for your
												convenience only, and by no
												means represents guaranteed
												returns.
											</p>
										</div>
									}
								>
									<FaRegQuestionCircle />
								</ToolTip>
								<IoMdSettings />
							</div>
						</div>
					</div>
					<div className={css.addLiquidity__line}></div>
					<div className={css.addLiquidity__body}>
						<div className={css.addLiquidity__body__left}>
							<div className={css.addLiquidity__title}>
								CHOOSE TOKEN PAIR
							</div>
							<div className={css.addLiquidity__listDropdown}>
								<div className={css.addLiquidity__dropdownItem}>
									<div>
										<img src={staking2} alt='bnb' />
									</div>
									<div>BNB</div>
									<FaCaretDown />
								</div>
								+
								<div className={css.addLiquidity__dropdownItem}>
									<div>
										<img src={staking2} alt='bnb' />
									</div>
									<div>BNB</div>
									<FaCaretDown />
								</div>
							</div>
							<Card
								className={css.addLiquidity__pickContainer}
								classNameContent={css.addLiquidity__pick}
							>
								<div className={css.addLiquidity__pickTitle}>
									V3 LP - 0.25% fee tier
									<Pill>96% Pick</Pill>
								</div>
								<div className={css.addLiquidity__pickMore}>
									More
									<FaAngleDown />
								</div>
								<div className={css.addLiquidity__pick__list}>
									<Card
										classNameContent={
											css.addLiquidity__pick__listItem
										}
										className={` ${css.active}`}
									>
										0.01%
										<Pill>Not Created</Pill>
									</Card>
									<Card
										classNameContent={
											css.addLiquidity__pick__listItem
										}
									>
										0.05%
										<Pill>Not Created</Pill>
									</Card>
									<Card
										classNameContent={
											css.addLiquidity__pick__listItem
										}
									>
										0.25%
										<Pill>Not Created</Pill>
									</Card>
									<Card
										classNameContent={
											css.addLiquidity__pick__listItem
										}
									>
										1%
										<Pill>Not Created</Pill>
									</Card>
								</div>
								<div className={css.addLiquidity__pick__footer}>
									Add V2 Liquidity
								</div>
							</Card>
							<div className={css.addLiquidity__title}>
								CHOOSE TOKEN PAIR
							</div>
							<div className={css.addLiquidity__inputTitle}>
								<img src={staking2} alt='bnb' />
								BNB
								<CopyButton
									content={`copy 1`}
									tooltipPosition={tooltipPosition.right}
								/>
							</div>
							<Input></Input>
							<div className={css.addLiquidity__inputTitle}>
								<img src={staking1} alt='bnb' />
								BNB
								<CopyButton
									content={`copy 2`}
									tooltipPosition={tooltipPosition.right}
								/>
							</div>
							<Input></Input>
						</div>
						<div className={css.addLiquidity__body__right}>
							<div className={css.addLiquidity__top}>
								<div className={css.addLiquidity__title}>
									SET PRICE RANGE
								</div>
								<div className={css.addLiquidity__topRight}>
									View prices in
									<PillSquare
										className={`flex items-center gap-1`}
									>
										<FaArrowRightArrowLeft />
										BNB
									</PillSquare>
								</div>
							</div>
							<div className={css.addLiquidity__price}>
								Current Price: 159.935 CAKE per BNB
							</div>
							<div className={css.addLiquidity__priceModify}>
								<div className={css.addLiquidity__priceItem}>
									<LuMinusCircle />
									<div
										className={css.addLiquidity__priceMain}
									>
										<div>Min Price</div>
										<div>101.98</div>
										<div>CAKE per BNB</div>
									</div>
									<FiPlusCircle />
								</div>
								<div className={css.addLiquidity__priceItem}>
									<LuMinusCircle />
									<div
										className={css.addLiquidity__priceMain}
									>
										<div>Max Price</div>
										<div>343.68</div>
										<div>CAKE per BNB</div>
									</div>
									<FiPlusCircle />
								</div>
							</div>

							<Tabs2
								listTabs={rangeListTab}
								selectedItem={rangeSelected}
								onChange={rangeChangeHandle}
								typeButton={
									buttonClassesType.primaryThinOutline
								}
							/>
							<div className='mt-3'>
								<Button
									className='w-100'
									type={buttonClassesType.primary}
								>
									Connect Wallet
								</Button>
							</div>
						</div>
					</div>
				</Card>
			</div>
			<FooterComponent />
		</div>
	);
}
