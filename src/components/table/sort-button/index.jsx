import PropTypes from 'prop-types';
import css from './sort-button.module.scss';
import { HiMiniArrowsUpDown } from "react-icons/hi2";

function SortButton(props) {
	const {
		active
	} = props;

	const renderActive = (active) => {
		return active ? css.active : '';
	}

	return (
		<div className={`${css.sortButton} ${renderActive(active)}`}>
			<HiMiniArrowsUpDown />
		</div>
	)
}

SortButton.propTypes = {
	active: PropTypes.bool
}

export default SortButton;
