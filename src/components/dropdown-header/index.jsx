import css from 'src/components/dropdown-header/dropdown-header.module.scss';
import { useLocation } from 'react-router-dom';
import { useTheme } from 'src/context/dark-theme';
import PropTypes from 'prop-types';

export const dropdownHeaderAlignEnum = {
	left: 'left',
	center: 'center',
	right: 'right',
};

function DropdownHeader(props) {
	const {
		header,
		list,
		align,
		disabled,
		headerHoverEffect,
		active
	} = props;

	const { isDarkMode } = useTheme();
	const location = useLocation();

	const renderDarkTheme = () => {
		return isDarkMode ? css.dark : '';
	};

	const renderBorder = function (value) {
		return value ? css.border : '';
	};

	const renderListItem = function () {
		return list.map((item) => {
			return (
				<div
					onClick={item.onClick}
					key={item.id}
					className={`${css.headerMenu__item} ${renderClassActiveItem(item)} hover-p flex align-center justify-between ${renderBorder(
						item.borderBottom,
					)}`}
				>
					<div>{item.content}</div>
					{item.icon}
				</div>
			);
		});
	};
	const renderClassActiveItem = (item) => {
		return item.url === location.pathname ? css.active : '';
	}
	const renderAlign = function (value) {
		switch (value) {
			case dropdownHeaderAlignEnum.left:
				return { left: 0 };

			case dropdownHeaderAlignEnum.right:
				return { right: 0 };

			default:
				break;
		}
	};
	const renderCanHover = () => {
		return disabled ? '' : css.canHover;
	};
	const renderHeaderHoverEffect = () => {
		return headerHoverEffect ? '' : css.disableHoverEffect;
	};
	const renderClassActive = () => {
		return active ? css.active : ''
	}

	return (
		<div className={`${css['dropdownHeader']} py-1 ${renderDarkTheme()}`}>
			<div
				className={`${css.headerContainer} ${renderCanHover()} ${renderHeaderHoverEffect()} flex align-center justify-center p-3 select-none hover-p ${renderClassActive()}`}
			>
				{header}
			</div>
			<div
				data-header-menu-container={true}
				style={renderAlign(align)}
				className={`${css.headerMenuContainer} ${renderCanHover()}`}
			>
				<div className={`${css['headerMenu']} py-2  border-1`}>
					{renderListItem()}
				</div>
			</div>
		</div>
	);
}

DropdownHeader.defaultProps = {
	header: 'test',
	list: [],
	align: dropdownHeaderAlignEnum.left,
	disabled: false,
	headerHoverEffect: true,
};

DropdownHeader.propTypes = {
	header: PropTypes.node,
	list: PropTypes.array,
	align: PropTypes.oneOf(Object.values(dropdownHeaderAlignEnum)),
	disabled: PropTypes.bool,
	headerHoverEffect: PropTypes.bool,
};

export default DropdownHeader;
