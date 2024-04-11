import {Outlet} from 'react-router-dom';
import ConfigComponent from 'src/components/config-component';
import Footer from './footer-user';
import Header from './header-user';
import css from './user.template.module.scss';

function UserTemplate() {
	return (
		<ConfigComponent>
			<Header />
			<div className={css.userTemplate}>
				<Outlet />
			</div>
			<Footer />
		</ConfigComponent>
	);
}

export default UserTemplate;
