import { useEffect, useRef } from 'react';
import css from './go-up-modal.module.scss';
import { IoClose } from "react-icons/io5";

function GoUpModal(props) {
	const {
		show,
		close,
		title,
		children
	} = props;

	const modalRootElementRef = useRef(null);
	const overlayElementRef = useRef(null);
	const modalElementRef = useRef(null);

	const showModal = () => {
		if (!modalRootElementRef?.current) return;
		!modalRootElementRef.current.classList.contains(css.show) &&
			modalRootElementRef.current.classList.add(css.show)
	}

	const closeModal = () => {
		if (!modalRootElementRef?.current) return;
		modalRootElementRef.current.classList.remove(css.show)
	}

	useEffect(() => {
		if (show) {
			showModal();
		} else {
			closeModal();
		}
	}, [show])

	return (
		<div
			className={css.goUpModal}
			ref={modalRootElementRef}
		>
			<div
				className={css.goUpModal__overlay}
				ref={overlayElementRef}
				onClick={close}
			/>
			<div className={css.goUpModal__container}>
				<div
					ref={modalElementRef}
					className={`${css.goUpModal__modal} ${css.goUp}`}
				>
					<div className={css.goUpModal__header}>
						<div>
							{title}
						</div>
						<div onClick={close}>
							<IoClose />
						</div>
					</div>
					<div className={css.goUpModal__body}>
						{children}
					</div>
				</div>

			</div>
		</div>
	)
}

export default GoUpModal