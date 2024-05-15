import { useRef, useCallback } from 'react';
import { useCountUp } from 'react-countup';

function CountUp(props) {
	const {
		className,
		endValue,
		duration = 5,
		start = 0,
		decimals = 2
	} = props;

	const totalEstimateElement = useRef(null);
	useCallback(
		useCountUp({
			ref: totalEstimateElement,
			end: endValue,
			start: start,
			duration: duration,
			separator: ',',
			decimals: decimals,
			scrollSpyOnce: true
		}),
		[],
	);

	return (
		<span
			ref={totalEstimateElement}
			className={className}
		>
		</span>
	)
}

export default CountUp