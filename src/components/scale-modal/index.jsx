import { IoClose } from 'react-icons/io5';
import css from './scale-modal.module.scss';
import { useEffect, useRef } from 'react';

function ScaleModal(props) {
	const {
		show,
		close,
		title,
		children
	} = props;

	const modalRootElementRef = useRef(null);
	const overlayElementRef = useRef(null);
	const modalContainerElementRef = useRef(null);

	const showModal = () => {
		if (!modalRootElementRef?.current)
			return;
		!modalRootElementRef.current.classList.contains(css.show) &&
			modalRootElementRef.current.classList.add(css.show)
	}

	const closeModal = () => {
		if (
			!modalRootElementRef?.current ||
			!overlayElementRef?.current ||
			!modalContainerElementRef?.current
		)
			return;

		!overlayElementRef.current.classList.contains(css.closeOverlayAnimation) && overlayElementRef.current.classList.add(css.closeOverlayAnimation);

		!modalContainerElementRef.current.classList.contains(css.closeModalAnimation) && modalContainerElementRef.current.classList.add(css.closeModalAnimation);

		const idTimeout = setTimeout(() => {
			modalRootElementRef.current.classList.remove(css.show);
			modalContainerElementRef.current.classList.remove(css.closeModalAnimation)
			overlayElementRef.current.classList.remove(css.closeOverlayAnimation)
			clearTimeout(idTimeout);
		}, 100);
	}

	useEffect(() => {
		if (show) {
			showModal();
		} else if (!show) {
			closeModal();
		}
	}, [show])

	return (
		<div
			className={css.scaleModal}
			ref={modalRootElementRef}
		>
			<div
				className={`${css.scaleModal__overlay} ${css.showOverlayAnimation}`}
				ref={overlayElementRef}
			/>
			<div
				className={`${css.scalModal__container} ${css.showModalAnimation}`}
				ref={modalContainerElementRef}
			>
				<div className={css.scaleModal__modal}>
					<div className={css.scaleModal__header}>
						<div>
							{title}
						</div>
						<div>
							<IoClose onClick={close} />
						</div>
					</div>
					<div className={css.scaleModal__line} />
					<div className={css.scaleModal__body}>
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ScaleModal