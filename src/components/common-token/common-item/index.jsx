import PropTypes from 'prop-types';
import css from './common-item.module.scss';

function CommonItem(props) {
	const {
		content,
		disabled
	} = props;

	const renderDisabled = (disabled) => {
		return disabled ? css.disabled : '';
	}

	return (
		<div className={`${css.commonItem} ${renderDisabled(disabled)}`}>
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
