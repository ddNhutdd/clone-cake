import Warning from 'src/components/warning';
import css from './bridge.module.scss';
import { IoWarning } from "react-icons/io5";
import Card, { cardType } from 'src/components/card';
import Input from './input';
import Button from 'src/components/button';
import ArrowUpDownIcon from 'src/assets/icons/arrow-up-down.icon';

function Bridge() {
	return (
		<div className={css.bridge}>
			<div className={css.container}>
				<div className={css.bridge__content}>
					<Warning
						icon={<IoWarning />}
					>
						<div className={css.bridge__warning}>
							Outbound transfers from Polygon zkEVM are subject to a 7 days delay for block confirmations.
						</div>
					</Warning>
					<Card
						type={cardType.flat}
						className={css.bridge__card}
						classNameContent={css.bridge__cardContent}
					>
						<div className={css.bridge__connect}>
							Connect
						</div>
						<div className={css.bridge__input}>
							<Input />
						</div>
						<div className={css.bridge__arrow}>
							<ArrowUpDownIcon />
						</div>
						<div className={css.bridge__connect}>
							Connect
						</div>
						<div className={css.bridge__input}>
							<Input />
						</div>
						<div className={css.bridge__rowContainer}>
							<div className={css.bridge__row}>
								<div>
									Gas on destination
								</div>
								<div>
									0.24 ETH
								</div>
							</div>
							<div className={css.bridge__row}>
								<div>
									You will receive
								</div>
								<div>
									__
								</div>
							</div>
							<div className={css.bridge__row}>
								<div>
									Fee
								</div>
								<div>
									1097.20 USD
								</div>
							</div>
							<div className={css.bridge__row}>
								<div>
									Slippage tolerance
								</div>
								<div>
									0.50%
								</div>
							</div>
						</div>
						<div>
							<Button className={'w-100'}>
								Connect
							</Button>
						</div>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default Bridge;