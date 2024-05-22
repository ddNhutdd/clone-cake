import { Outlet } from 'react-router-dom';
import css from './bridge-templates.module.scss';
import Header from './header';

function BridgeTemplates() {
	return (
		<div className={css.BridgeTemplates}>
			<Header />
			<Outlet />
		</div>
	)
}

export default BridgeTemplates;