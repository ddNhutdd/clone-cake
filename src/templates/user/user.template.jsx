import { Outlet } from 'react-router-dom';
import ConfigComponent from 'src/components/config-component';
import Footer from './footer-user';
import Header from './header-user';
import css from './user.template.module.scss';
import { useTheme } from 'src/context/dark-theme';

function UserTemplate() {
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<ConfigComponent>
			<Header />
			<div className={`${css.userTemplate__outlet} ${darkClass}`}>
				<Outlet />
			</div>
			<Footer />
		</ConfigComponent>
	);
}

export default UserTemplate;
