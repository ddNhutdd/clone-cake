import { useState } from 'react';
import css from './row.module.scss';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

function Row(props) {
	const {
		title,
		children
	} = props;

	const [showDetail, setShowDetail] = useState(false);
	const showDetailStyle = showDetail ? {} : { display: 'none' }

	const headerClickHandle = () => {
		setShowDetail(state => !state);
	}

	return (
		<div className={css.row}>
			<div onClick={headerClickHandle} className={css.row__header}>
				<div className={css.row__header__left}>
					{title}
				</div>
				<div className={css.row__header__right}>
					{
						showDetail ?
							<>
								Hide
								<FaAngleUp />
							</> :
							<>
								Details
								<FaAngleDown />
							</>
					}
				</div>
			</div>
			<div style={showDetailStyle} className={css.row__body}>
				{children}
			</div>
		</div>
	)
}

export default Row