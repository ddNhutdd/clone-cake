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
import { useTheme } from 'src/context/dark-theme';
import { showType } from 'src/constants';

function Pools() {
	// modal calc roi
	const [roiModalShow, setRoiModalShow] = useState(false);
	const openModal = (ev) => {
		ev.stopPropagation();
		setRoiModalShow(true);
	}
	const closeModal = (ev) => {
		ev.stopPropagation();
		setRoiModalShow(false);
	}

	// kiểu hiển thị
	const [showTypeSelected, setShowTypeSelected] = useState(showType.list);

	// theme 
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<DrillContext.Provider value={{
			openModal,
			closeModal,
			showTypeSelected,
			setShowTypeSelected
		}}>
			<div className={`${css.pools} ${darkClass}`}>
				<HeaderComponent list={HeaderComponentList2} />
				<Panel />
				<Control />
				{
					showTypeSelected === showType.list && <ContentList />
				}
				{
					showTypeSelected === showType.grid && <ContentGrid />
				}
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