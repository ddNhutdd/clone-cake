import css from './modal-content.module.scss';
import Input3 from "src/components/input-3";
import ModalItem from './modal-item';
import PropTypes from 'prop-types';

function ModalContent(props) {
	const {
		smallText,
		list
	} = props;

	const renderList = () => {
		return list?.map((item, index) => {
			return (
				<ModalItem
					content={item}
					key={index}
				/>
			);
		})
	}

	return (
		<div className={css.modalContent}>
			<Input3></Input3>

			<div className={css.modalContent__selectTitle}>
				{smallText}
			</div>
			<div className={css.modalContent__list}>
				{renderList()}
			</div>
		</div>
	)
}

ModalContent.propTypes = {
	smallText: PropTypes.node,
	list: PropTypes.array
}

export default ModalContent;
