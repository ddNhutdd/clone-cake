import css from './output-money.module.scss';
import { FaAngleDown } from "react-icons/fa6";

function OutputMoney(props) {
	const {
		tokenModalOpen,
		networkModalOpen
	} = props;

	return (
		<div className={css.outputMoney}>
			<div className={css.outputMoney__header}>
				<div
					className={css.outputMoney__header__left}
					onClick={tokenModalOpen}
				>
					<div className={css.outputMoney__header__left__img}>
						<img src="https://icons-ckg.pages.dev/lz-dark/tokens/cake.svg" alt="dk" />
					</div>
					<div className={css.outputMoney__header__left__content}>
						<div className={css[`outputMoney--title`]}>
							Token
						</div>
						<div className={css[`outputMoney--selected`]}>
							Cake
							<FaAngleDown />
						</div>
					</div>
				</div>
				<div
					className={css.outputMoney__header__right}
					onClick={networkModalOpen}
				>
					<div className={css[`outputMoney--title`]}>
						Network
					</div>
					<div className={css[`outputMoney--selected`]}>
						Ethereum
						<FaAngleDown />
					</div>
				</div>
			</div>
			<div className={css.outputMoney__body}>
				<div className={css.outputMoney__body__value}>
					<input
						type="text"
						placeholder='0'
					/>
				</div>
				<div className={css.outputMoney__body__currency}>
					<div className={css.outputMoney__body__currency__list}>
						<div className={`${css.outputMoney__body__currency__item} ${css.active}`}>
							USD
						</div>
						<div className={css.outputMoney__body__currency__item}>
							EUR
						</div>
					</div>
					<div className={css.outputMoney__body__currency__value}>
						__
					</div>
				</div>
			</div>
		</div>
	)
}

export default OutputMoney;