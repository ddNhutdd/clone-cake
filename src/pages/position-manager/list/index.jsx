import React, { useState } from 'react';
import Controls from './controls';
import ListView from './list-view';
import { DrillContext } from 'src/context/drill';
import { showType as showTypeConstant } from 'src/constants';
import GridView from './grid-view';
import Modal from 'src/components/modal';
import RoiModalContent from './roi-modal-content';
import css from './list.module.scss';

function List() {
	// view 
	const [showType, setShowType] = useState(showTypeConstant.list);

	// modal roi
	const [showRoiModal, setShowRoiModal] = useState(false);
	const roiModalOpen = (ev) => {
		ev.stopPropagation();
		setShowRoiModal(true);
	}

	return (
		<>
			<DrillContext.Provider value={{ showType, setShowType, roiModalOpen }}>
				<Controls />
				{
					showType === showTypeConstant.list ?
						<ListView /> :
						<GridView />
				}
			</DrillContext.Provider>
			<Modal
				show={showRoiModal}
				setShow={setShowRoiModal}
				title={`Roi Calculator`}
				content={<RoiModalContent />}
				customCssModal={css.list__roiModal}
			/>
		</>
	)
}

export default List