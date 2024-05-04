import { useState } from "react";
import InputDropdown from "src/components/input-dropdown";

function Profile() {

	const [options, setOptions] = useState([
		{
			value: `minutes`,
			content: 'Minutes'
		},
		{
			value: `hours`,
			content: 'Hours'
		},
		{
			value: `days`,
			content: 'Days'
		}
	]);
	const [seletedItem, setSeletedItem] = useState(options?.at(0));

	const dropdownChangeHandle = (item) => {
		setSeletedItem(item)
	}

	const [inputValue, setInputValue] = useState('');
	const inputChangeHandle = (ev) => {
		setInputValue(ev.target.value)
	}


	return (
		<div style={{ margin: 300 }}>
			<div>
				<InputDropdown
					options={options}
					selectedOption={seletedItem}
					dropdownOnChange={dropdownChangeHandle}
					inputValue={inputValue}
					inputOnChange={inputChangeHandle}
				/>
			</div>
		</div>
	)
}

export default Profile;