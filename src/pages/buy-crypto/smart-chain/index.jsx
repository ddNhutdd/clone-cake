import { useTheme } from 'src/context/dark-theme';
import css from './smart-chain.module.scss';

function SmartChain() {
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';
	return (
		<div className={`${css.smartChain} ${darkClass}`}>
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