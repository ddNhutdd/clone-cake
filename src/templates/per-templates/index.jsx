import { Outlet } from 'react-router-dom';
import Header from './header';
import css from './per-templates.module.scss';

function PerTemplates() {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	)
}

export default PerTemplates