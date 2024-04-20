import CommonItem from './common-item';
import css from './common-token.module.scss';
import cake from 'imgs/staking-1.png';

function CommonToken() {
	const list = [
		{
			key: 'BNB',
			img: cake,
			disabled: true
		},
		{
			key: 'USDT',
			img: cake
		}
		,
		{
			key: 'CAKE',
			img: cake
		}
		,
		{
			key: 'BTCB',
			img: cake
		}
	]

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
		<div className={css.commonToken}>
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