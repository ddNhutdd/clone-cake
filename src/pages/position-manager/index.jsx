import HeaderComponent from 'src/components/header-component';
import css from './position-manager.module.scss';
import { HeaderComponentList2 } from 'src/constants/header-component-list-2';
import Panel from './panel';
import List from './list';

function PositionManager() {
	return (
		<div className={css.positionManager}>
			<HeaderComponent list={HeaderComponentList2} />
			<Panel />
			<List />
		</div>
	)
}

export default PositionManager