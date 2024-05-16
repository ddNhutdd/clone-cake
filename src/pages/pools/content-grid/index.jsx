import { useTheme } from 'src/context/dark-theme';
import css from './content-grid.module.scss';
import FirstItem from './first-item';
import Item from './item';

function ContentGrid() {
	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.contentGrid} ${darkClass}`}>
			<div className={css.container}>
				<div className={css.contentGrid__content}>
					<div className={css.contentGrid__content__item}>
						<FirstItem />
					</div>
					<div className={css.contentGrid__content__item}>
						<Item />
					</div>
					<div className={css.contentGrid__content__item}>
						<Item />
					</div>
					<div className={css.contentGrid__content__item}>
						<Item />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContentGrid