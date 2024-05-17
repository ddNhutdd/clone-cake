import css from './item.module.scss';

function Item(props) {
	const {
		content
	} = props;

	return (
		<div className={css.item}>
			<div className={css.item__step}>
				Step {content.number}
			</div>
			<div className={css.item__image}>
				<img src={content.img} alt="dk" />
			</div>
			<div className={css.item__title}>
				{content.title}
			</div>
			<div className={css.item__text}>
				{content.text}
			</div>
		</div>
	)
}

export default Item