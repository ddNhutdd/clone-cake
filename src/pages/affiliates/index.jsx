import HeaderComponent from "src/components/header-component"
import Main from "./Main"
import Share from "./Share"
import Join from "./Join"
import Benefit from "./Benefit"
import Question from "./Question"
import HeaderComponentList6 from "src/constants/header-component-list-6"

function Affiliates() {
	return (
		<div>
			<HeaderComponent list={HeaderComponentList6} />
			<Main />
			<Share />
			<Join />
			<Benefit />
			<Question />
		</div>
	)
}

export default Affiliates