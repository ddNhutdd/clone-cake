import { generateUniqueUUID } from 'src/utils';
import css from './radio.module.scss';
import { useRef } from 'react';
import { useTheme } from 'src/context/dark-theme';

function Radio(props) {
	const {
		name,
		onChange,
		value,
		children,
		checked,
		defaultChecked
	} = props;


	// tạo mã ngẫu nhiên duy nhất
	const id = useRef(generateUniqueUUID());




	// phần theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';




	return (
		<div className={`${css.radio} ${darkClass}`}>
			<input
				id={id.current}
				name={name}
				type='radio'
				style={{ width: 0, height: 0, position: 'absolute' }}
				value={value}
				onChange={onChange.bind(null, value)}
				checked={checked}
				defaultChecked={defaultChecked}
			/>

			<label htmlFor={id.current}>
				<div className={css.radio__circle}>
					<div className={css.radio__dot}>
					</div>
				</div>
				<div className={css.radio__text}>
					{children}
				</div>
			</label>

		</div>

	)
}

export default Radio