import React, {useState} from 'react';
import css from './route-modal-content.module.scss';
import {ToolTip} from 'src/components/tooltip';
import {FaRegQuestionCircle} from 'react-icons/fa';
import Switch from 'src/components/switch/switch';
import CheckBox from 'src/components/check-box';

export default function RouteModalContent() {
	// v2
	const [v2Selected, setV2Seleted] = useState(false);

	// v3
	const [v3Selected, setV3Seleted] = useState(false);

	// StableSwap
	const [stableSwapSelected, setStableSwapSelected] = useState(false);

	// Pool
	const [poolSelected, setPoolSeleted] = useState(false);

	// Multihops
	const [multihopsSelected, setmultihopsSelected] = useState(false);

	// Pool
	const [routingSelected, setRoutingSelected] = useState(false);

	return (
		<div className={css.routeModalContent}>
			<div className={css.routeModalContent__small}>LIQUIDITY SOURCE</div>
			<div className={css.routeModalContent__row}>
				<div className={css.routeModalContent__left}>
					PancakeSwap V3
					<ToolTip
						className={`inline-flex items-center`}
						content={`V3 offers concentrated liquidity to provide deeper liquidity for traders with the same amount of capital, offering lower slippage and more flexible trading fee tiers.`}
					>
						<FaRegQuestionCircle />
					</ToolTip>
				</div>
				<div className={css.routeModalContent__right}>
					<Switch checked={v3Selected} setChecked={setV3Seleted} />
				</div>
			</div>
			<div className={css.routeModalContent__row}>
				<div className={css.routeModalContent__left}>
					PancakeSwap V2
					<ToolTip
						className={`inline-flex items-center`}
						content={
							<>
								<p>
									The previous V2 exchange is where a number
									of iconic, popular assets are traded.
								</p>
								<p>
									Recommend leaving this on to ensure backward
									compatibility.
								</p>
							</>
						}
					>
						<FaRegQuestionCircle />
					</ToolTip>
				</div>
				<div className={css.routeModalContent__right}>
					<Switch checked={v2Selected} setChecked={setV2Seleted} />
				</div>
			</div>
			<div className={css.routeModalContent__row}>
				<div className={css.routeModalContent__left}>
					PancakeSwap StableSwap
					<ToolTip
						className={`inline-flex items-center`}
						content={`StableSwap provides higher efficiency for stable or pegged assets and lower fees for trades.`}
					>
						<FaRegQuestionCircle />
					</ToolTip>
				</div>
				<div className={css.routeModalContent__right}>
					<Switch
						checked={stableSwapSelected}
						setChecked={setStableSwapSelected}
					/>
				</div>
			</div>
			<div className={css.routeModalContent__row}>
				<div className={css.routeModalContent__left}>
					PancakeSwap MM Linked Pool
					<ToolTip
						className={`inline-flex items-center`}
						content={
							<>
								<p>
									Trade through the market makers if they
									provide better deal
								</p>
								<p>
									If a trade is going through market makers,
									it will no longer route through any
									traditional AMM DEX pools.
								</p>
							</>
						}
					>
						<FaRegQuestionCircle />
					</ToolTip>
				</div>
				<div className={css.routeModalContent__right}>
					<Switch
						checked={poolSelected}
						setChecked={setPoolSeleted}
					/>
				</div>
			</div>
			<div className={css.routeModalContent__small}>
				ROUTING PREFERENCE
			</div>
			<div className={css.routeModalContent__row}>
				<div className={css.routeModalContent__left}>
					<CheckBox
						id={`multihops`}
						checked={multihopsSelected}
						setCheck={setmultihopsSelected}
					>
						Allow Multihops
					</CheckBox>
					<ToolTip
						className={`inline-flex items-center`}
						content={
							<>
								<p>
									Multihops enables token swaps through
									multiple hops between several pools to
									achieve the best deal.
								</p>
								<p>
									Turning this off will only allow direct
									swap, which may cause higher slippage or
									even fund loss.
								</p>
							</>
						}
					>
						<FaRegQuestionCircle />
					</ToolTip>
				</div>
				<div className={css.routeModalContent__right}></div>
			</div>
			<div className={css.routeModalContent__row}>
				<div className={css.routeModalContent__left}>
					<CheckBox
						id={`routing`}
						checked={routingSelected}
						setCheck={setRoutingSelected}
					>
						Allow Split Routing
					</CheckBox>
					<ToolTip
						className={`inline-flex items-center`}
						content={
							<>
								<p>
									Split routing enables token swaps to be
									broken into multiple routes to achieve the
									best deal.
								</p>
								<p>
									Turning this off will only allow a single
									route, which may result in low efficiency or
									higher slippage.
								</p>
							</>
						}
					>
						<FaRegQuestionCircle />
					</ToolTip>
				</div>
				<div className={css.routeModalContent__right}></div>
			</div>
		</div>
	);
}
