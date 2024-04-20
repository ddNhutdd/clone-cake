import { useState, cloneElement } from "react";

const useStep = (current, steps) => {

	const [currentInner, setCurrentInner] = useState(current);

	const nextStep = () => {
		setCurrentInner(state => Math.min(state + 1, steps.length - 1));
	}

	const prevStep = () => {
		setCurrentInner(state => Math.max(state - 1, 0));
	}

	const setStep = (stepNumber) => {
		setCurrentInner(stepNumber);
	}

	const generateContent = () => {
		const currentStep = steps[currentInner];
		return cloneElement(currentStep, {
			nextStep,
			prevStep,
			setStep,
		});
	}
	return [generateContent, setStep, nextStep, prevStep];

}

export default useStep;