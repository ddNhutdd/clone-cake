import css from './list-token.module.scss';
import TokenItem from './token-item';

function ListToken() {
	const list = [
		{
			key: 'BNB',
			img: 'https://assets.coingecko.com/coins/images/34786/thumb/aenodex_200x200.png?1706028151',
			text: 'Binance Chain Native Token'
		},
		{
			key: '$AEONODEX',
			img: 'https://assets.coingecko.com/coins/images/34786/thumb/aenodex_200x200.png?1706028151',
			text: 'AEONODEX',
			disabled: true
		},
		{
			key: '$AGW',
			img: 'https://assets.coingecko.com/coins/images/34409/thumb/photo_2023-12-29_11-08-22.jpg?1704818407',
			text: 'ANTI GLOBAL WARMING TOKEN'
		},
		{
			key: '$ANRX',
			img: 'https://assets.coingecko.com/coins/images/13415/thumb/anrkey.jpg?1696513176',
			text: 'AnRKey X'
		},
		{
			key: '$BABYDOGEINU',
			img: 'https://assets.coingecko.com/coins/images/17012/thumb/KEtLxnLH_400x400.jpg?1696516576',
			text: 'Baby Doge Inu'
		},
		{
			key: '$DEV',
			img: 'https://assets.coingecko.com/coins/images/30013/thumb/devops_200.png?1696528937',
			text: 'DevOps'
		},
		{
			key: '$FUR',
			img: 'https://assets.coingecko.com/coins/images/26035/thumb/furio.png?1696525112',
			text: 'Furio'
		}
	]

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