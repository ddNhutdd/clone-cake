import { useTheme } from 'src/context/dark-theme';
import css from './input-swap.module.scss';
import { HiArrowsUpDown } from "react-icons/hi2";
import { useState } from 'react';

function InputSwap(props) {
	const {
		inputUnitInitial,
		outputUnitInitial,
		outputCssCustom,
		onChange = () => { }
	} = props;

	// inputUnit
	const [inputUnit, setInputUnit] = useState(inputUnitInitial);

	// output unit
	const [outputUnit, setOutputUnit] = useState(outputUnitInitial);

	// swap click handle
	const swapClickHandle = () => {
		setInputUnit(outputUnit);
		setOutputUnit(inputUnit);
		onChange();
	}

	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.inputSwap} ${darkClass}`}>
			<div className={css.inputSwap__left}>
				<div className={css.inputSwap__input}>
					<input className={css.inputSwap__inputTop} type="text" />
					<div>{inputUnit}</div>
				</div>
				<div className={css.inputSwap__convert}>
					<div className={`${css.inputSwap__output} ${outputCssCustom}`}>
						0.00
					</div>
					<div>{outputUnit}</div>
				</div>
			</div>
			<div className={css.inputSwap__right}>
				<HiArrowsUpDown onClick={swapClickHandle} />
			</div>
		</div>
	)
}

export default InputSwap