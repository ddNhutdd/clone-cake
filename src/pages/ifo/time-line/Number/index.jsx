import { useTheme } from 'src/context/dark-theme';
import css from './number.module.scss';

function Number(props) {
	const {
		lineTop,
		lineBot,
		active,
		number
	} = props;

	const activeClacss = active ? css.active : '';

	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.number} ${darkClass}`}>
			<div className={`${css.number__circle}`}>
				<div className={`${css.number__circle__content} ${activeClacss}`}>
					{number}
				</div>
			</div>
			{
				lineTop && <div className={`${activeClacss} ${css.number__line__top}`}></div>
			}
			{
				lineBot && <div className={`${activeClacss} ${css.number__line__bot}`}></div>
			}
		</div >
	)
}

export default Number