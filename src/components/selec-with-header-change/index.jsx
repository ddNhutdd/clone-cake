import { createElement, useEffect, useRef, useState } from 'react';
import css from './select.module.scss';
import { FaCaretDown } from "react-icons/fa6";

function SelectWithHeaderChange(props) {
	const {
		options,
		onChange,
		selectValue
	} = props;

	const headerElement = useRef();
	const menuElement = useRef();
	const showMenu = useRef(false);

	const initial = () => {
		createMenu();
		document.body.appendChild(menuElement.current);
	}
	const calcPostion = () => {
		const recp = headerElement?.current?.getBoundingClientRect();
		const top = recp.top + recp.height;
		const left = recp.left;
		const menuWidth = recp.width;
		menuElement.current.style.top = top + 'px';
		menuElement.current.style.left = left + 'px';
		menuElement.current.style.width = menuWidth + 'px';
	}
	const createMenu = () => {
		// create menu
		const menuContainer = document.createElement('div');
		menuElement.current = menuContainer;
		menuContainer.classList.add(css.selectWithHeaderChange__menu);
		calcPostion(headerElement?.current, menuContainer);

		//create ul
		const ulElement = document.createElement('ul');
		menuContainer.appendChild(ulElement)

		// create li
		options.forEach(item => {
			const liElement = document.createElement('li');
			liElement.addEventListener('click', itemClickHandle.bind(null, item.value))
			liElement.innerHTML = item.label;
			ulElement.appendChild(liElement);
		})

	}
	const headerClickHandle = (event) => {
		event.stopPropagation();
		if (showMenu.current === false) {
			showMenu.current = true;
			setSelectOpen();
		} else {
			setSelectClose();
		}
	}
	const setSelectOpen = () => {
		!menuElement.current.classList.contains(css.show) &&
			menuElement.current.classList.add(css.show);
		!headerElement.current.classList.contains(css.show) &&
			headerElement.current.classList.add(css.show);
	}
	const setSelectClose = () => {
		showMenu.current = false;
		menuElement.current.classList.remove(css.show);
		headerElement.current.classList.remove(css.show);
	}
	const itemClickHandle = (value) => {
		onChange(value);
		setSelectClose();
	}

	useEffect(() => {
		initial();
		document.addEventListener('scroll', calcPostion);
		document.addEventListener('click', setSelectClose)
		return () => {
			document.removeEventListener('scroll', calcPostion);
			document.removeEventListener('click', setSelectClose);
			document.body.removeChild(menuElement.current);
		}
	}, []);

	return (
		<div className={css.selectWithHeaderChange}>
			<div
				ref={headerElement}
				className={css.selectWithHeaderChange__header}
				onClick={headerClickHandle}
			>
				<span>
					{
						options?.find(item => item.value === selectValue)?.[`label`]
					}
				</span>
				<FaCaretDown />
			</div>
		</div>
	)
}

export default SelectWithHeaderChange;

{/*<Select
	selectValue={selectedValue}
	onChange={handleChange}
	options={[
		{
			value: 'jack',
			label: 'Jack (100)',
		},
		{
			value: 'lucy',
			label: 'Lucy (101)',
		},
	]}
/>*/}