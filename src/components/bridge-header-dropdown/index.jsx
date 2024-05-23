import { NavLink } from 'react-router-dom';
import css from './bridge-header-dropdown.module.scss';
import { RxExit } from "react-icons/rx";
import { useEffect, useRef } from 'react';

function BridgeHeaderDropdown(props) {
	const {
		children,
		list,
		showIcon
	} = props;

	//render list 
	const renderList = (list) => {
		if (showIcon) {
			return list?.map(item => {
				return (
					<NavLink key={item.content} className={css.bridgeHeaderDropdown__item}>
						{item.content}
						<RxExit />
					</NavLink>
				);
			})
		} else {
			return list?.map(item => {
				return (
					<NavLink key={item.content} className={css.bridgeHeaderDropdown__item}>
						{item.content}
					</NavLink>
				);
			})
		}

	}

	// close menu 
	const menuElementRef = useRef(null);
	const calcTopMenu = (ev) => {
		if (!menuElementRef?.current) {
			return;
		}
		menuElementRef.current.style.top = 56 - window.scrollY + 'px';
	}

	useEffect(() => {
		document.addEventListener('scroll', calcTopMenu);

		return () => {
			document.removeEventListener('scroll', calcTopMenu);
		}
	}, [])

	return (
		<div className={css.bridgeHeaderDropdown}>
			<span className={css.bridgeHeaderDropdown__header}>
				{children}
			</span>
			<div
				ref={menuElementRef}
				className={css.bridgeHeaderDropdown__menu}
			>
				{renderList(list)}
			</div>
		</div>
	)
}

export default BridgeHeaderDropdown