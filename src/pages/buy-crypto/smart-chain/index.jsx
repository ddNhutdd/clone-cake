import css from './smart-chain.module.scss';

function SmartChain() {
	return (
		<div className={css.smartChain}>
			<div>
				<img src="https://assets.pancakeswap.finance/web/chains/1.png" alt="ethereum" />
			</div>
			<div>
				Ethereum
			</div>
		</div>
	)
}

export default SmartChain