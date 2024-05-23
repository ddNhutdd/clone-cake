import { IoIosSearch } from 'react-icons/io';
import css from './input-search.module.scss';

function InputSearch() {
	return (
		<div className={css.inputSearch}>
			<IoIosSearch />
			<input placeholder='Search' type="text" />
		</div>
	)
}

export default InputSearch