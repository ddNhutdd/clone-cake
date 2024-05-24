import css from './go-up-modal.module.scss';

function GoUpModal() {
	return (
		<div className={css.goUpModal}>
			<div className={css.goUpModal__overlay} />
			<div className={css.goUpModal__container}>
				<div className={css.goUpModal__modal}>
					
				</div>
			</div>
		</div>
	)
}

export default GoUpModal