import SelectWithHeaderCustom from 'src/components/select-with-header-custom';
import css from './top.module.scss';
import Button, { buttonClassesType } from 'src/components/button';
import { FaAngleDown } from 'react-icons/fa6';
import { useState } from 'react';

const list = [
	{
		label: 'WETH-USDC',

	},
	{
		label: 'ARB-USDC',
	}
]

function Top() {
	//dropdown
	const [dropdownSelected, setDropdownSelected] = useState(list.at(0));
	const dropdownChangeClickHandle = (item) => {
		setDropdownSelected(item);
	}

	return (
		<div className={css.top}>
			<div className={css.top__image}>
				<img src="https://pancakeswap.stryke.xyz/tokens/weth.svg" alt="dk" />
				<img src="https://pancakeswap.stryke.xyz/tokens/usdc.svg" alt="dk" />
			</div>
			<div className={css.top__dropdown}>
				<SelectWithHeaderCustom
					options={list}
					onChange={dropdownChangeClickHandle}
				>
					<div className={css.top__dropdownHeader}>
						<Button
							type={buttonClassesType.outline}
						>
							{dropdownSelected.label}
							<FaAngleDown />
						</Button>
					</div>
				</SelectWithHeaderCustom>
			</div>
			<div className={css.top__item}>
				<div>
					Mark Price
				</div>
				<div>
					$
					{" "}
					<span className={css.top__number}>
						3886.390
					</span>
				</div>
			</div>
			<div className={css.top__item}>
				<div>
					Open Interest
				</div>
				<div>
					$
					{" "}
					<span className={css.top__number}>
						391.56K
					</span>
				</div>
			</div>
			<div className={css.top__item}>
				<div>
					Liquidity
				</div>
				<div>
					$
					{" "}
					<span className={css.top__number}>
						1.30M
					</span>
				</div>
			</div>
			<div className={css.top__item}>
				<div>
					Volume (7D)
				</div>
				<div>
					$
					{" "}
					<span className={css.top__number}>
						3.65M
					</span>
				</div>
			</div>
			<div className={css.top__item}>
				<div>
					Premium (7D)
				</div>
				<div>
					$
					{" "}
					<span className={css.top__number}>
						19.09K
					</span>
				</div>
			</div>
		</div >
	)
}

export default Top