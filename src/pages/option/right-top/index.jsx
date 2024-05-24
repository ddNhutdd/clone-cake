import React from 'react';
import useStep from 'src/hooks/use-step';
import Trade from './trade';
import Liquidity from './liquidity';
import css from './right-top.module.scss';

function RightTop() {
	//step
	const steps = [<Trade />, <Liquidity />]
	const [generateContent, setStep, , , currentStep] = useStep(0, steps)
	const renderActive = (step) => {
		return step === currentStep ? css.active : '';
	}

	return (
		<div className={css.rightTop}>
			<div className={css.rightTop__content}>
				<div className={css.rightTop__tab}>
					<div
						onClick={setStep.bind(null, 0)}
						className={`${css.rightTop__item} ${renderActive(0)}`}
					>
						Trade
					</div>
					<div
						onClick={setStep.bind(null, 1)}
						className={`${css.rightTop__item} ${renderActive(1)}`}
					>
						Liquidity
					</div>
				</div>
				<div>
					{generateContent()}
				</div>
			</div>
		</div>
	)
}

export default RightTop