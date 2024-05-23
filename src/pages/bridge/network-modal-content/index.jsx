import InputSearch from 'src/components/input-search';
import css from './network-modal-content.module.scss';
import Item from './item';

function NetworkModalContent() {
	return (
		<div className={css.networkModalContent}>
			<InputSearch />
			<div className={css.networkModalContent__list}>
				<div className={css.networkModalContent__item}>
					<Item />
				</div>
			</div>
		</div>
	)
}

export default NetworkModalContent