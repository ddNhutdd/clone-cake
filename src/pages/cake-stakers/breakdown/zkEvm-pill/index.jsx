import css from './zkEvm-pill.module.scss';
import ZkEvmIcon from 'src/assets/icons/zkEvm.icon';

function ZkEvmPill() {
	return (
		<div className={css.zkEvmPill}>
			<ZkEvmIcon />
			zkEVM
		</div>
	)
}

export default ZkEvmPill