import PropTypes from 'prop-types';
import css from './common-item.module.scss';

function CommonItem(props) {
	const {
		img,
		tokenName
	} = props;
	return (
		<div className={css.commonItem}>
			<img src={img} alt={tokenName} />
			{tokenName}
		</div>
	)
}

CommonItem.propTypes = {
	img: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	tokenName: PropTypes.string
}

export default CommonItem






