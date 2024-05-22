import css from './input.module.scss';
import { FaAngleDown } from "react-icons/fa6";

function Input() {
	return (
		<div className={css.input}>
			<div className={css.input__header}>
				<div className={css.input__header__left}>
					<div className={css.input__header__left__img}>
						<img src="https://icons-ckg.pages.dev/lz-dark/tokens/cake.svg" alt="dk" />
					</div>
					<div className={css.input__header__left__content}>
						<div className={css[`input--title`]}>
							Token
						</div>
						<div className={css[`input--selected`]}>
							Cake
							<FaAngleDown />
						</div>
					</div>
				</div>
				<div className={css.input__header__right}>
					<div className={css[`input--title`]}>
						Network
					</div>
					<div className={css[`input--selected`]}>
						Ethereum
						<FaAngleDown />
					</div>
				</div>
			</div>
			<div className={css.input__body}>
				<div className={css.input__body__max}>
					max
				</div>
				<div className={css.input__body__value}>
					432432
				</div>
				<div className={css.input__body__balance}>
					<div className={css.input__body__balance__text}>
						Balance
					</div>
					<div className={css.input__body__balance__value}>
						__
					</div>
				</div>
			</div>
		</div>
	)
}

export default Input;