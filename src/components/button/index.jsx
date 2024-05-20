import PropTypes from 'prop-types';
import css from './button.module.scss';
import { forwardRef } from 'react';
import { useTheme } from 'src/context/dark-theme';

export const buttonClassesType = {
	primary: 'primary',
	primaryThin: 'primaryThin',
	primaryThinOutline: 'primaryThinOutline',
	primaryText: 'primaryText',
	secondThin: 'secondaryThin',
	outline: 'outline',
	primaryPuple: 'primaryPuple',
	primaryWhite: 'primaryWhite',
	disaled: 'disabled'
};

const Button = forwardRef((props, ref) => {
	const { isDarkMode } = useTheme()

	const {
		type,
		children,
		style,
		className,
		onClick
	} = props;

	const getButtonClasses = (type) => {
		switch (type) {
			case buttonClassesType.primary:
				return css['button-primary'];

			case buttonClassesType.primaryThin:
				return css['button-primaryThin'];

			case buttonClassesType.primaryThinOutline:
				return css['button-primaryThinOutline'];

			case buttonClassesType.primaryText:
				return css['primary-text'];

			case buttonClassesType.secondThin:
				return css['button-secondThin'];

			case buttonClassesType.outline:
				return css['button-outline'];

			case buttonClassesType.primaryPuple:
				return css['button-primary-puple'];

			case buttonClassesType.disaled:
				return css['button-disabled'];

			case buttonClassesType.primaryWhite:
				return css['button-primary-white'];

			default:
				return css['button-primary'];
		}
	};

	const renderDark = () => {
		return isDarkMode ? css.dark : '';
	};

	return (
		<button
			ref={ref}
			onClick={onClick}
			style={style}
			className={`${getButtonClasses(type)} ${renderDark()} ${className}`}
		>
			{children}
		</button>
	);
});

Button.propDefault = {
	type: buttonClassesType.primary,
	className: '',
	onclick: () => { },
};

Button.propTypes = {
	type: PropTypes.oneOf(Object.values(buttonClassesType)),
	style: PropTypes.object,
	children: PropTypes.node,
	className: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
