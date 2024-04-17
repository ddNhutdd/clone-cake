import Switch from 'src/components/switch/switch';
import css from './modal-item.module.scss';
import { FaArrowRight } from "react-icons/fa6";
import PropTypes from 'prop-types'

function ModalItem(props) {
	const {
		content
	} = props;

	const renderDisabled = () => {
		if (content?.disabled === true) {
			return css.disabled;
		}
	}
	const showSwitch = (value) => {
		return value === true ? "" : 'd-0';
	}

	return (
		<div className={`${css.modalItem} ${(renderDisabled())}`}>
			<div>
				{content?.img}
			</div>
			<div>
				<div className={css.modalItem__top}>
					{content?.top}
				</div>
				<div className={css.modalItem__bot}>
					{content?.bot}
				</div>
			</div>
			<div className={css.modalItem__last}>
				<div className={showSwitch(!content.switch)}>
					<FaArrowRight />
				</div>
				<div  className={`${showSwitch(content.switch)} ${css.content__switch}`} style={{ transform: 'scale(0.5)' }}>
					<Switch checked={false} setChecked={() => { }} />
				</div>
			</div>
		</div>
	)
}

ModalItem.propTypes = {
	content: PropTypes.object
}

export default ModalItem;