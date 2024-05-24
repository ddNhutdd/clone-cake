import css from './wallet-icon.module.scss';
import Wallet from 'src/assets/icons/wallet.icon';

function WalletIcon() {
	return (
		<div className={css.walletIcon}>
			<Wallet />
		</div>
	)
}

export default WalletIcon