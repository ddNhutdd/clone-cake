
import Radio from "src/components/radio";

function Profile() {


	const radioChange = (value, children, ev) => {
		
	}
	return (
		<div style={{ margin: 300 }}>
			<Radio

				id={`radio1`}
				name={`test`}
				onChange={radioChange}
				value={`value1`}
			>
				All
			</Radio> 
			<br />
			<Radio

				id={`radio2`}
				name={`test`}
				onChange={radioChange}
				value={`value1`}
			>
				2
			</Radio>
			<br />
			<Radio

				id={`radio3`}
				name={`test`}
				onChange={radioChange}
				value={`value1`}
			>
				3
			</Radio>
			<br />
			<Radio

				id={`radio4`}
				name={`test`}
				onChange={radioChange}
				value={`value1`}
			>
				4
			</Radio>
		</div>
	)
}

export default Profile;