import { ToolTip } from 'src/components/tooltip';
import css from './uniform-row.module.scss';
import { GoQuestion } from "react-icons/go";
import InputDropdown from 'src/components/input-dropdown';

function UniformRow(props) {
	const {
		text,
		popupContent,
		options,
		selectedOption,
		dropdownOnChange,
		inputValue,
		inputOnChange,
	} = props;
	return (
		<div className={css.uniformRow}>
			<div className={css.uniformRow__text}>
				{text}
			</div>
			<ToolTip
				content={popupContent}
			>
				<div className='flex items-center'>
					<GoQuestion />
				</div>
			</ToolTip>
			<InputDropdown
				options={options}
				selectedOption={selectedOption}
				dropdownOnChange={dropdownOnChange}
				inputValue={inputValue}
				inputOnChange={inputOnChange}
			/>
		</div>
	)
}

export default UniformRow;