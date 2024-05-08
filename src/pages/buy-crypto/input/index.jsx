import { useTheme } from 'src/context/dark-theme';
import css from './input.module.scss';
import { FaCaretDown } from "react-icons/fa";

function Input(props) {
	const {
		onShowModal
	} = props;

	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<>
			<div className={`${css.input} ${darkClass}`}>
				<input
					type="text"
				/>
				<div
					className={css.input__buttonModal}
					onClick={onShowModal}
				>
					<div>
						<img src={`https://pancakeswap.finance/images/currencies/usd.png`} alt="USD" />
					</div>
					<div className={css.input__currency}>
						USD
					</div>
					<div className='ml-a'>
						<FaCaretDown />
					</div>
				</div>
			</div>
		</>
	)
}

Input.propTypes = {

}

export default Input;
