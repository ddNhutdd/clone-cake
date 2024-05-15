import HeaderComponent from 'src/components/header-component';
import css from './pools.module.scss';
import { HeaderComponentList2 } from 'src/constants/header-component-list-2';
import Panel from './panel';
import Control from './control';
import ContentList from './content-list';
import ContentGrid from './content-grid';
import { DrillContext } from 'src/context/drill';
import { useState } from 'react';
import Modal from 'src/components/modal';
import RoiModal from './roi-modal';

function Pools() {
	// modal calc roi
	const [roiModalShow, setRoiModalShow] = useState(false);
	const openModal = () => {
		setRoiModalShow(true);
	}
	const closeModal = () => {
		setRoiModalShow(false);
	}

	return (
		<DrillContext.Provider value={{
			openModal,
			closeModal
		}}>
			<div className={css.pools}>
				<HeaderComponent list={HeaderComponentList2} />
				<Panel />
				<Control />
				<ContentList />
				<ContentGrid />
			</div>
			<Modal
				show={roiModalShow}
				setShow={setRoiModalShow}
				title={`ROI Calculator`}
				content={<RoiModal />}
				customCssModal={css.roiModal__modal}
			/>
		</DrillContext.Provider>
	)
}

export default Pools