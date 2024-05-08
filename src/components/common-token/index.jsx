import { useTheme } from 'src/context/dark-theme';
import CommonItem from './common-item';
import css from './common-token.module.scss';
import list from './list';


function CommonToken() {

	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';


	const renderList = () => {
		return list?.map(item => {
			return (
				<CommonItem
					disabled={item.disabled}
					key={item.key}
					content={item}
				/>
			);
		})
	}

	return (
		<div className={`${css.commonToken} ${darkClass}`}>
			<div className={css.commonToken__title}>
				Common tokens
			</div>
			<div className={css.commonToken__list}>
				{renderList(list)}
			</div>
		</div>
	)
}

export default CommonToken;