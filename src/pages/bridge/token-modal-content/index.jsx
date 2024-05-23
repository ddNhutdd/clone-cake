import InputSearch from 'src/components/input-search';
import RowItem from './row-item';
import css from './token-modal-content.module.scss'

function TokenModalContent() {
	return (
		<div className={css.tokenModalContent}>
			<InputSearch />
			<div className={css.tokenModalContent__title}>
				BNB CHAIN NETWORK
			</div>
			<div>
				<RowItem />
			</div>
			<div className={css.tokenModalContent__title}>
				ALL NETWORKS
			</div>
			<div className={css.tokenModalContent__list}>
				<div className={css.tokenModalContent__item}>
					<RowItem />
				</div>
				<div className={css.tokenModalContent__item}>
					<RowItem />
				</div>
				<div className={css.tokenModalContent__item}>
					<RowItem />
				</div>
				<div className={css.tokenModalContent__item}>
					<RowItem />
				</div>
			</div>
		</div>
	)
}

export default TokenModalContent