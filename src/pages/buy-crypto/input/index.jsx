import Modal from 'src/components/modal';
import css from './input.module.scss';
import { FaCaretDown } from "react-icons/fa";
import ModalContent from '../modal-content';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Input(props) {
	const {
		modalTitle,
		modalList,
		smallText
	} = props;

	const [modalShow, setModalShow] = useState(false);
	const modalOpen = () => {
		setModalShow(true);
	}
	const modalClose = () => {
		setModalShow(false);
	}

	return (
		<>
			<div className={css.input}>
				<input type="text" />
				<div
					className={css.input__buttonModal}
					onClick={modalOpen}
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
			<Modal
				show={modalShow}
				setShow={setModalShow}
				title={modalTitle}
				content={<ModalContent
					smallText={smallText}
					list={modalList}
				/>}
			/>
		</>
	)
}

Input.propTypes = {
	modalTitle: PropTypes.node,
	modalList: PropTypes.object
}

export default Input;
