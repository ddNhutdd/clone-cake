import css from './zkSync-pill.module.scss';
import ZkSyncIcon from 'src/assets/icons/zkSync.icon';

function ZkSyncPill() {
	return (
		<div className={css.akSyncPill}>
			<ZkSyncIcon />
			zkSync
		</div>
	)
}

export default ZkSyncPill