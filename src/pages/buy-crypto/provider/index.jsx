import Pill, { pillType } from 'src/components/pill';
import css from './provider.module.scss';
import { IoMdCheckmark } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";

function Provider(props) {
	const {
		onClick
	} = props;
	return (
		<div onClick={onClick} className={css.provider}>
			<div>
				<img src="https://assets.pancakeswap.finance/web/onramp/mercuryo.svg" alt="mercuryo" />
			</div>
			<div>
				<div>
					Mercuryo
				</div>
				<div>
					1 ETH = $3,115.39
				</div>
			</div>
			<div>
				<div className='flex items-center gap-1'>
					<Pill
						type={pillType.success}
						className={'gap-1'}
					>
						Best Price
						<IoMdCheckmark />
					</Pill>
					<FaCaretDown />
				</div>
			</div>
		</div>
	)
}

export default Provider