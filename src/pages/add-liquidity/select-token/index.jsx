import React from 'react';
import Input3 from 'src/components/input-3';
import css from './select-token.module.scss';
import { ToolTip, tooltipPosition } from 'src/components/tooltip';
import { GoQuestion } from "react-icons/go";
import CommonItem from './common-item';
import bnb from 'imgs/staking-1.png'
import TokenItem from './token-item';

function SelectToken() {
	return (
		<div className={css.selectToken}>
			<Input3
				placeholder='Search name or paste address'
				className={css.selectToken__inputSearch}
			/>
			<div className={css.selectToken__commonBase}>
				<div className='flex items-center gap-1'>
					Common bases
					<ToolTip
						position={tooltipPosition.right}
						content={<>
							<div>
								These tokens are commonly paired with
							</div>
							<div>
								other tokens.
							</div>
						</>}
					>
						<div className='flex items-center'>
							<GoQuestion />
						</div>
					</ToolTip>
				</div>
				<div className={css.selectToken__commonList}>
					<CommonItem
						img={bnb}
						tokenName='BNB'
					/>
					<CommonItem
						img={bnb}
						tokenName='BNB'
					/>
					<CommonItem
						img={bnb}
						tokenName='BNB'
					/>
					<CommonItem
						img={bnb}
						tokenName='BNB'
					/>
				</div>
			</div>

			<div className={css.selectToken__listToken}>
				<TokenItem
					img={bnb}
					tokenName={`bnb`}
					tokenFullName={`Binance`}
				/>
				<TokenItem
					img={bnb}
					tokenName={`bnb`}
					tokenFullName={`Binance`}
					disabled
				/>
				<TokenItem
					img={bnb}
					tokenName={`bnb`}
					tokenFullName={`Binance`}
				/>
				<TokenItem
					img={bnb}
					tokenName={`bnb`}
					tokenFullName={`Binance`}
				/>
				<TokenItem
					img={bnb}
					tokenName={`bnb`}
					tokenFullName={`Binance`}
				/>
				<TokenItem
					img={bnb}
					tokenName={`bnb`}
					tokenFullName={`Binance`}
				/>
				<TokenItem
					img={bnb}
					tokenName={`bnb`}
					tokenFullName={`Binance`}
				/>
				<TokenItem
					img={bnb}
					tokenName={`bnb`}
					tokenFullName={`Binance`}
				/>
				<TokenItem
					img={bnb}
					tokenName={`bnb`}
					tokenFullName={`Binance`}
				/>
				<TokenItem
					img={bnb}
					tokenName={`bnb`}
					tokenFullName={`Binance`}
				/>
				<TokenItem
					img={bnb}
					tokenName={`bnb`}
					tokenFullName={`Binance`}
				/>
				<TokenItem
					img={bnb}
					tokenName={`bnb`}
					tokenFullName={`Binance`}
				/>
			</div>
		</div>
	)
}

export default SelectToken