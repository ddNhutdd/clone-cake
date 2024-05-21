import Input3 from '../input-3';
import css from './input-roi.module.scss';
import { FaCheck } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { useState } from 'react';

export const inputRoiStatus = {
	edit: 'edit',
	read: 'read'
}

function InputRoi(props) {
	const {
		inputOnChange,
		inputValue = '',
		statusOnChange
	} = props;

	// status
	const [status, setStatus] = useState(inputRoiStatus.read);
	const checkClickHandle = () => {
		setStatus(inputRoiStatus.read);
		statusOnChange(inputRoiStatus.read)
	}
	const eidtClickHandle = () => {
		setStatus(inputRoiStatus.edit);
		statusOnChange(inputRoiStatus.edit)
	}

	return (
		<div className={css.inputRoi}>
			<div className={css.inputRoi__content}>
				<div className={css.inputRoi__title}>
					ROI AT CURRENT RATES
				</div>
				<div className={css.inputRoi__main}>
					{
						status === inputRoiStatus.edit ?
							<>
								<Input3
									value={inputValue}
									onChange={inputOnChange}
								/>
								<FaCheck onClick={checkClickHandle} />
							</> :
							<>
								<div className={css.inputRoi__main__label}>
									$0.00
								</div>
								<FaPen onClick={eidtClickHandle} />
							</>
					}
				</div>
				<div className={css.inputRoi__small}>
					0.00%
				</div>
			</div>
		</div>
	)
}

export default InputRoi