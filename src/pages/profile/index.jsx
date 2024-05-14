import { useState } from "react";
import SelectWithHeaderChange from "src/components/selec-with-header-change";

function Profile() {
	const [value, setValue] = useState(`jack`);
	const handleChange = (value) => {
		setValue(value)
	}
	return (
		<div style={{ margin: 300 }}>
			<SelectWithHeaderChange
				selectValue={value}
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
			/>
		</div>
	)
}

export default Profile;