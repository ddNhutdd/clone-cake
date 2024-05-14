import HeaderComponent from 'src/components/header-component';
import css from './pools.module.scss';
import { HeaderComponentList2 } from 'src/constants/header-component-list-2';
import Panel from './panel';
import Control from './control';
import ContentList from './content-list';
import ContentGrid from './content-grid';

function Pools() {
	return (
		<div className={css.pools}>
			<HeaderComponent list={HeaderComponentList2} />
			<Panel />
			<Control />
			<ContentList />
			<ContentGrid />
		</div>
	)
}

export default Pools