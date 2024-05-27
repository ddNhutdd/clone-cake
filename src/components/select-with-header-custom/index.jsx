import { useEffect, useRef } from 'react';
import css from './select-with-header-custom.module.scss';

function SelectWithHeaderCustom(props) {
	const {
		children,
		options,
		onChange,
		classMenuCustom
	} = props;

	const menuElement = useRef(null);
	const headerElement = useRef(null);
	const showMenu = useRef(false);

	const createMenu = () => {
		// create menu
		const menuContainer = document.createElement('div');
		menuElement.current = menuContainer;
		menuContainer.classList.add(css.selectWithHeaderCustom__menu);
		menuContainer.classList.add(classMenuCustom);
		calcPostion(headerElement?.current, menuContainer);

		//create ul
		const ulElement = document.createElement('ul');
		menuContainer.appendChild(ulElement)

		// create li
		options.forEach(item => {
			const liElement = document.createElement('li');
			liElement.addEventListener('click', menuItemClickHandle.bind(null, item))
			liElement.innerHTML = item.label;
			ulElement.appendChild(liElement);
		})
	}

	const menuItemClickHandle = (item) => {
		onChange(item);
	}

	const calcPostion = () => {
		const recp = headerElement?.current?.getBoundingClientRect();
		const top = recp.top + recp.height;
		const left = recp.left;
		const menuWidth = recp.width;
		menuElement.current.style.top = top + 1 + 'px';
		menuElement.current.style.left = left + 'px';
		menuElement.current.style.width = menuWidth + 'px';
	}

	const initial = () => {
		createMenu();
		document.body.appendChild(menuElement.current);
	}

	const headerClickHandle = (event) => {
		event.stopPropagation();
		if (showMenu.current === false) {
			setSelectOpen();
		} else {
			setSelectClose();
		}
	}

	const setSelectOpen = () => {
		showMenu.current = true;
		!menuElement.current.classList.contains(css.show) &&
			menuElement.current.classList.add(css.show);
	}

	const setSelectClose = () => {
		showMenu.current = false;
		menuElement.current.classList.remove(css.show);
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
		<div className={css.selectWithHeaderCustom}>
			<div
				ref={headerElement}
				className={css.selectWithHeaderCustom__header}
				onClick={headerClickHandle}
			>
				{children}
			</div>
		</div>
	)
}

export default SelectWithHeaderCustom