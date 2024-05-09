import css from './input-search.module.scss';

function InputSearch() {
	return (
		<div className={css.inputSearch}>
			<Input3
				placeholder={`Search liquidity pairs or tokens`}
				style={{ height: '40px' }}
			/>
			<div className={css.inputSearch__overlay}></div>
			<div className={css.inputSearch__modal}>
			
			</div>
		</div>
	)
}

export default InputSearch