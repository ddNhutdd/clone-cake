import css from './choose.module.scss';
import { IoClose } from "react-icons/io5";
import Input3 from 'src/components/input-3';
import PropTypes from 'prop-types'
import ListToken from 'src/components/list-token';
import CommonToken from 'src/components/common-token';
import { useTheme } from 'src/context/dark-theme';

function Choose(props) {
	const {
		closeModal,
		nextStep
	} = props;

	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.choose} ${darkClass}`}>
			<div className={css.choose__header}>
				<div className={css.choose__title}>
					Select a Token
				</div>
				<div onClick={closeModal} className={css.choose__close}>
					<IoClose />
				</div>
			</div>
			<div className={css.choose__body}>
				<div>
					<Input3
						placeholder='Search name or parse address'
						style={{ height: 48 }}
					/>
				</div>
				<div>
					<CommonToken />
				</div>
				<div style={{ marginLeft: '-24px', marginRight: '-24px' }}>
					<ListToken />
				</div>
				<div className={css.choose__action}>
					<div onClick={nextStep} className={css.choose__manage}>
						Manage Token
					</div>
				</div>
			</div>
		</div>
	)
}

Choose.propTypes = {
	closeModal: PropTypes.func,
	nextStep: PropTypes.func
}

export default Choose;