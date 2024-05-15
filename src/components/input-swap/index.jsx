import css from './input-swap.module.scss';
import { HiArrowsUpDown } from "react-icons/hi2";

function InputSwap() {
	return (
		<div className={css.inputSwap}>
			<div className={css.inputSwap__left}>
				<div className={css.inputSwap__input}>
					<input className={css.inputSwap__inputTop} type="text" />
					<div>USD</div>
				</div>
				<div className={css.inputSwap__convert}>
					<div className={css.inputSwap__output}> 
						0.00
					</div>
					<div>CAKE</div>
				</div>
			</div>
			<div className={css.inputSwap__right}>
				<HiArrowsUpDown />
			</div>
		</div>
	)
}

export default InputSwap