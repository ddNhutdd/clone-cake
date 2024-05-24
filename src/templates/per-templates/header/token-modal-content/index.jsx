import ArbCircleIcon from 'src/assets/icons/arb-circle.icon';
import css from './token-modal-content.module.scss';
import { GoDotFill } from 'react-icons/go';

function TokenModalContent() {
	return (
		<div className={css.tokenModalContent}>
			<div>
				<ArbCircleIcon />
			</div>
			<div>
				Arbitrum
			</div>
			<div>
				Connected
			</div>
			<div>
				<GoDotFill />
			</div>
		</div>
	)
}

export default TokenModalContent