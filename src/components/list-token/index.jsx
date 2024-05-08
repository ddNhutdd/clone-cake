import list from './list';
import css from './list-token.module.scss';
import TokenItem from './token-item';

function ListToken() {
	

	const renderList = () => {
		return list?.map(item => {
			return (
				<TokenItem
					key={item.key}
					content={item}
					disabled={item?.disabled}
				/>
			)
		})
	}

	return (
		<div className={css.listToken}>
			{renderList(list)}
		</div>
	)
}

export default ListToken