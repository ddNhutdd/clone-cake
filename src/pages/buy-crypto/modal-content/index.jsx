import css from './modal-content.module.scss';
import Input3 from "src/components/input-3";
import ModalItem from './modal-item';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Drawer, { drawerDirection } from 'src/components/drawer';
import NetworkContent from './network-content';

function ModalContent(props) {
	const {
		smallText,
		list,
		allowNetwork = false
	} = props;

	const [smallTextInner, setSmallTextInner] = useState(smallText);

	const renderList = (list) => {
		return list?.map((item, index) => {
			return (
				<ModalItem
					content={item}
					key={index}
				/>
			);
		})
	}

	// network
	const [showNetwork, setShowNetwork] = useState(false);
	const renderClassShowNetwork = (allowNetwork) => {
		return allowNetwork ? '' : 'd-0'
	}

	return (
		<div className={css.modalContent}>
			<Input3 placeholder={`Search name`} />
			<div className={css.modalContent__selectTitle}>
				{smallTextInner}
			</div>
			<div className={css.modalContent__list}>
				{renderList(list)}
			</div>
			<div className={`${renderClassShowNetwork(allowNetwork)}`}>
				<div
					onClick={setShowNetwork.bind(null, !showNetwork)}
					className={css.modalContent__network}
				>
					Select Tokens buy network
				</div>
				<Drawer
					direction={drawerDirection.bottom}
					open={showNetwork}
					setOpen={setShowNetwork}
				>
					<NetworkContent
						setSelectedTed={setSmallTextInner}
						close={setShowNetwork.bind(null, false)}
					/>
				</Drawer>
			</div>
		</div>
	)
}

ModalContent.propTypes = {
	smallText: PropTypes.node,
	list: PropTypes.array,
	allowNetwork: PropTypes.bool
}

export default ModalContent;
