import css from './question-item.module.scss';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from 'react';
import { useTheme } from 'src/context/dark-theme';

function QuestionItem(props) {
	const {
		title,
		children
	} = props;

	// show details
	const [showDetails, setShowDetails] = useState(false);
	const toggleDetails = () => {
		setShowDetails(state => !state);
	}

	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.questionItem} ${darkClass}`}>
			<div onClick={toggleDetails} className={css.questionItem__row}>
				<div className={css.questionItem__title}>
					{title}
				</div>
				<div
					className={css.questionItem__toggle}
				>
					{
						showDetails ?
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
			{
				showDetails && <div className={css.questionItem__details}>
					{children}
				</div>
			}
		</div>
	)
}

export default QuestionItem