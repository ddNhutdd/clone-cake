import React, { useEffect, useState } from 'react';
import css from './input-dropdown.module.scss';
import { FaAngleDown } from "react-icons/fa6";
import { useTheme } from 'src/context/dark-theme';


function InputDropdown(props) {
	const {
		options,
		selectedOption,
		dropdownOnChange,
		inputValue,
		inputOnChange
	} = props;

	const { isDarkMode } = useTheme();
	const classDark = isDarkMode ? css.dark : '';


	const [show, setShow] = useState(false);
	const classShow = show ? css.show : '';
	const closeDropdown = () => {
		setShow(false);
	}

	const headerClickHandle = (ev) => {
		setShow(true)
	}

	const dropdownItemClickHandle = (item) => {
		dropdownOnChange(item);
	}

	const renderMenu = () => {
		return options?.map(item => {
			return (
				<div
					key={item.value}
					onClick={dropdownItemClickHandle.bind(null, item)}
					className={css.inputDropdown__menu__item}
				>
					{item.content}
				</div>
			)
		})
	}

	useEffect(() => {
		window.addEventListener('click', closeDropdown, true);
		return () => {
			window.removeEventListener('click', closeDropdown, true);
		}
	}, [])

	return (
		<div className={`${css.inputDropdown} ${classDark}`}>
			<input value={inputValue} onChange={inputOnChange} type="text" />
			<div
				onClick={headerClickHandle}
				className={css.inputDropdown__header}
			>
				{selectedOption.content}
				<FaAngleDown />
			</div>
			<div className={`${css.inputDropdown__menu} ${classShow}`}>
				{renderMenu()}
			</div>
		</div>
	)
}

export default InputDropdown