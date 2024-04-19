import Pill, { pillType } from 'src/components/pill';
import css from './provider.module.scss';
import { IoMdCheckmark } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import PropTypes from 'prop-types'

function Provider(props) {
	const {
		onClick,
		isButton = false,
		img,
		name,
		exchange,
		pill
	} = props;

	const renderOnClick = (onClick) => {
		let result = {};

		if (isButton) {
			result = {
				onClick
			}
		}

		return result;
	}

	return (
		<div {...renderOnClick(onClick)} className={css.provider}>
			<div>
				{img}
			</div>
			<div>
				<div>
					{name}
				</div>
				<div>
					{exchange}
				</div>
			</div>
			<div>
				<div className='flex items-center gap-1'>
					{pill}
					{isButton && <FaCaretDown />}
				</div>
			</div>
		</div>
	)
}

Provider.propTypes = {
	onClick: PropTypes.func,
	isButton: PropTypes.bool,
	img: PropTypes.node,
	name: PropTypes.node,
	exchage: PropTypes.node,
	pill: PropTypes.node
}

export default Provider;
