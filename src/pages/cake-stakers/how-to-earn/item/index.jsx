import { useTheme } from 'src/context/dark-theme';
import css from './item.module.scss';

function Item(props) {
	const {
		content
	} = props;

	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.item} ${darkClass}`}>
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