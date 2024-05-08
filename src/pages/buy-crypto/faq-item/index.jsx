import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './faq-item.module.scss';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { useTheme } from 'src/context/dark-theme';

function FaqItem(props) {
	const {
		title,
		content
	} = props;

	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	const [open, setOpen] = useState(false);

	const renderShowAction = (value) => {
		return value ? '' : 'd-0';
	}

	const actionClickHandle = (value) => {
		setOpen(value)
	}

	return (
		<div className={`${css.faqItem} ${darkClass}`}>
			<div className={css.faqItem__header}>
				<div className={css.faqItem__header__title}>
					{title}
				</div>
				<div
					onClick={actionClickHandle.bind(null, true)}
					className={`${css.faqItem__header__action} ${renderShowAction(!open)}`}
				>
					Detail
					<div className={css.faqItem__icon}>
						<FaAngleDown />
					</div>
				</div>
				<div
					onClick={actionClickHandle.bind(null, false)}
					className={`${css.faqItem__header__action} ${renderShowAction(open)}`}
				>
					Hide
					<div className={css.faqItem__icon}>
						<FaAngleUp />
					</div>
				</div>
			</div>
			<div className={`${css.faqItem__body} ${renderShowAction(open)}`}>
				{content}
			</div>
		</div>
	)
}

FaqItem.propTypes = {
	title: PropTypes.node,
	content: PropTypes.node
}

export default FaqItem;
