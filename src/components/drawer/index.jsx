import PropTypes from 'prop-types';
import DrawerLibrary from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import css from './drawer.module.scss';
import { useTheme } from 'src/context/dark-theme';

export const drawerDirection = {
	top: 'top',
	left: 'left',
	right: 'right',
	bottom: 'bottom'
}

function Drawer(props) {
	const {
		className,
		classNameOverlay,
		direction,
		open,
		setOpen,
		children,
		screen,
		radiusBottom
	} = props;
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	const isScreen = screen ? css.screen : '';

	const radiusButtonClass = radiusBottom !== false ? '' : css.radiusButtonNone

	const closeDrawer = () => {
		setOpen(() => false);
	}

	return (
		<DrawerLibrary
			open={open}
			onClose={closeDrawer}
			direction={direction || drawerDirection.bottom}
			className={`${css.drawer__modalCustom} ${className} ${isScreen} ${darkClass} ${radiusButtonClass}`}
			overlayClassName={`${css.drawer__overlayCustom} ${classNameOverlay} ${isScreen}`}
		>
			{
				children
			}
		</DrawerLibrary>
	)
}

Drawer.propTypes = {
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	classNameOverlay: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	direction: PropTypes.oneOf(Object.values(drawerDirection)),
	open: PropTypes.bool,
	setOpen: PropTypes.func,
	children: PropTypes.node
}

export default Drawer;
