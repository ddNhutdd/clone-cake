import PropTypes from 'prop-types';
import css from './common-item.module.scss';
import { useTheme } from 'src/context/dark-theme';

function CommonItem(props) {
	const {
		content,
		disabled
	} = props;


	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';



	const renderDisabled = (disabled) => {
		return disabled ? css.disabled : '';
	}





	return (
		<div className={`${darkClass} ${css.commonItem} ${renderDisabled(disabled)}`}>
			<img src={content?.img} alt={content?.key} />
			<div className={css.commonItem__text}>
				{
					content?.key
				}
			</div>
		</div>
	)
}

CommonItem.propTypes = {
	content: PropTypes.object,
}

export default CommonItem;
