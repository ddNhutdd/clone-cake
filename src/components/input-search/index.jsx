import { IoIosSearch } from 'react-icons/io';
import css from './input-search.module.scss';
import { useTheme } from 'src/context/dark-theme';

function InputSearch() {
	//theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.inputSearch} ${darkClass}`}>
			<IoIosSearch />
			<input placeholder='Search' type="text" />
		</div>
	)
}

export default InputSearch