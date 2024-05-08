import css from './token-item.module.scss';
import PropTypes from 'prop-types';
import { FaArrowRight } from "react-icons/fa6";
import { useTheme } from 'src/context/dark-theme';

function TokenItem({ content, disabled }) {

	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	const renderDisabled = (disabled) => {
		return disabled ? css.disabled : '';
	}

	return (
		<div className={`${darkClass} ${css.tokenItem} ${renderDisabled(disabled)}`}>
			<div>
				<img src={content?.img} alt={content?.key} />
			</div>
			<div className={css.tokenItem__body}>
				<div className={css.tokenItem__body__top}>
					{content?.key}
				</div>
				<div className={css.tokenItem__body__bot}>
					{content?.text}
				</div>
			</div>
			<div className='flex items-center ml-a'>
				<FaArrowRight />
			</div>
		</div>
	)
}

TokenItem.propTypes = {
	content: PropTypes.object,
	disabled: PropTypes.bool
}

export default TokenItem;