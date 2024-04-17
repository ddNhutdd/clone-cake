import css from './estimate.module.scss';
import { MdInfo } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { useState } from 'react';

export default function Estimate() {

	const [show, setShow] = useState(false);

	const renderShow = (value) => {
		return value ? 'd-0' : ''
	}
	const renderShowContent = () => {
		return show ? css.show : ''
	}
	const toggleShow = () => {
		setShow(state => !state);
	}

	return (
		<div onClick={toggleShow} className={css.estimate}>
			<div className={css.estimate__header}>
				<div className={css.estimate__header__left}>
					<div>
						Est total fees:
					</div>
					<div>
						$4.66
					</div>
					<div>
						<MdInfo />
					</div>
				</div>
				<div className={css.estimate__header__right}>
					<div className={renderShow(show)}>
						Show detail
					</div>
					<div className={`${css.estimate__svgContainer} ${renderShow(show)}`}>
						<FaCaretDown />
					</div>
					<div className={`${renderShow(!show)}`}>
						Hide detail
					</div>
					<div className={`${css.estimate__svgContainer} ${renderShow(!show)}`}>
						<FaCaretUp />
					</div>
				</div>
			</div>
			<div className={`${css.estimate__body} ${renderShowContent()}`}>
				<div className={css.estimate__row}>
					<div>
						Provider Fees
					</div>
					<div className={css.estimate__dot}>
					</div>
					<div className={css.estimate__number}>
						$4.66
					</div>
				</div>
				<div className={css.estimate__row}>
					<div>
						ETH Rate
					</div>
					<div className={css.estimate__dot}>
					</div>
					<div className={css.estimate__number}>
						$3,112.66
					</div>
				</div>
			</div>
		</div>
	)
}
