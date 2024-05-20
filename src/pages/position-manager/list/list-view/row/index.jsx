import css from './row.module.scss';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import PancakeOutlineIcon from 'src/assets/icons/pancake-outline.icon';
import { IoRocket } from "react-icons/io5";
import { MdOutlineCalculate } from "react-icons/md";
import Pill from 'src/components/pill';

function Row() {
	return (
		<div className={css.row}>
			<div className={css.row__first}>
				<div className={css.row__first__img}>
					<img src="https://tokens.pancakeswap.finance/images/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png" alt="dk" />
					<img src="https://tokens.pancakeswap.finance/images/0x07715EE7219B07b8e01CC7d2787f4e5e75860383.png" alt="dk" />
				</div>
				<div>
					WBNB-rBNB
				</div>
				<div>
					(DEFIEDGE#4)
				</div>
				<div>
					<Pill>
						0.25%
					</Pill>
				</div>
				<div>
					<Pill>
						<IoRocket />
						Booster
					</Pill>
				</div>
			</div>
			<div className={css.row__second}>
				<div>
					APR
				</div>
				<div>
					<div>
						<IoRocket />
					</div>
					<div>
						Up to
					</div>
					<div>
						385.15%
					</div>
					<div>
						143.69%
					</div>
					<div>
						<MdOutlineCalculate />
					</div>
				</div>
			</div>
			<div className={css.row__third}>
				<div>
					Earn
				</div>
				<div>
					CAKE + Fees
				</div>
			</div>
			<div className={css.row__fourth}>
				<div>
					Reward Per Day
				</div>
				<div>
					<Pill>
						<div>
							<PancakeOutlineIcon />
						</div>
						<div>85.97 CAKE</div>
					</Pill>
				</div>
			</div>
			<div className={css.row__fifth}>
				<div>
					Total Staked
				</div>
				<div>
					$67,621.97
				</div>
			</div>
			<div className={css.row__sixth}>
				<FaAngleDown />
				<FaAngleUp />
			</div>
		</div>
	)
}

export default Row