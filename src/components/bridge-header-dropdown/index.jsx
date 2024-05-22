import { NavLink } from 'react-router-dom';
import css from './bridge-header-dropdown.module.scss';
import { RxExit } from "react-icons/rx";

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

	return (
		<div className={css.bridgeHeaderDropdown}>
			<span className={css.bridgeHeaderDropdown__header}>
				{children}
			</span>
			<div className={css.bridgeHeaderDropdown__menu}>
				{renderList(list)}
			</div>
		</div>
	)
}

export default BridgeHeaderDropdown