import css from './eth-pill.module.scss';
import EthIcon from 'src/assets/icons/eth.icon';

function EthPill() {
	return (
		<div className={css.ethPill}>
			<EthIcon />
			ETH
		</div>
	)
}

export default EthPill