
import Radio from "src/components/radio";
import { ToolTip, tooltipPosition, tooltipTrigger } from "src/components/tooltip";

function Profile() {


	return (
		<div style={{ margin: 300 }}>
			<ToolTip
				show={false}
				trigger={tooltipTrigger.runtime}
				content={`123123123123`}
				position={tooltipPosition.right}
			>
				dsàdsàdsàdá
			</ToolTip>
		</div>
	)
}

export default Profile;