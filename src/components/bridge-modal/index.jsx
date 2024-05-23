import { useTheme } from 'src/context/dark-theme';
import css from './bridge-modal.module.scss';
import { IoClose } from "react-icons/io5";

function BridgeModal(props) {
	const {
		show,
		closeModal,
		children,
		header
	} = props;

	// render 
	const showClass = show ? css.show : '';

	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div
			className={`${css.bridgeModal} ${showClass} ${darkClass}`}
		>
			<div
				className={`${css.bridgeModal__overlay} ${css.fadeIn}`}
				onClick={closeModal}
			/>
			<div className={css.bridgeModal__contentContainer}>
				<div
					className={`${css.bridgeModal__modal} ${css.modalFadeIn}`}
				>
					<div className={css.bridgeModal__header}>
						<div className={css.bridgeModal__headerText}>
							{header}
						</div>
						<div>
							<IoClose onClick={closeModal} />
						</div>
					</div>
					<div className={css.bridgeModal__content}>
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BridgeModal