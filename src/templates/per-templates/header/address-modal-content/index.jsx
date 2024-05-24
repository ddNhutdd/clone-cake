import { MdOutlineFileCopy } from 'react-icons/md';
import css from './address-modal-content.module.scss';
import { IoExitOutline } from 'react-icons/io5';

function AddressModalContent() {
	return (
		<div className={css.addressModalContent}>
			<div className={css.addressModalContent__img}>
				<span className={css.addressModalContent__ship}>
					⛵️
				</span>
			</div>
			<div className={css.addressModalContent__address}>
				0x6a...7b01
			</div>
			<div className={css.addressModalContent__token}>
				0 ETH
			</div>
			<div className={css.addressModalContent__row}>
				<div className={css.addressModalContent__item}>
					<div>
						<MdOutlineFileCopy />
					</div>
					<div>
						Copy Address
					</div>
				</div>
				<div className={css.addressModalContent__item}>
					<div>
						<IoExitOutline />
					</div>
					<div>
						Disconect
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddressModalContent