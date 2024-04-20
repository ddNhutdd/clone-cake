import { useState } from "react";
import { Paging } from "src/components/paging";
import Table from "src/components/table";
import SortButton from "src/components/table/sort-button";
import Tabs3 from "src/components/tabs-3";
import useStep from "src/hooks/use-step";



function Profile() {

	const steps = [
		<Step1 title='thong tin 1' />,
		<Step2 title='thong tin 2' />,
		<Step3 title='thong tin 3' />,
	]

	const [generateContent, setStep, nextStep, prevStep] = useStep(0, steps)

	return (
		<div style={{ padding: 20 }}>
			<div style={{ padding: 20 }}>
				<button onClick={nextStep}>next</button>
				<button onClick={prevStep}>prev</button>
			</div>
			<div>
				{generateContent()}
			</div>
		</div>
	)
}

export default Profile;


function Step1({ nextStep, title }) {
	return (
		<>
			Step1 - {title}
			<button onClick={nextStep}>
				next
			</button>
		</>
	)
}

function Step2({ nextStep, prevStep, title }) {
	return (
		<>
			Step2 - {title}
			<button onClick={prevStep}>
				prev
			</button>
			<button onClick={nextStep}>
				next
			</button>
		</>
	)
}

function Step3({ prevStep }) {
	return (
		<>
			Step3
			<button onClick={prevStep}>
				prev
			</button>
		</>
	)
}