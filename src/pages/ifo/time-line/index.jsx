import Card from 'src/components/card';
import css from './time-line.module.scss';
import Button from 'src/components/button';
import { NavLink } from 'react-router-dom';
import Number from './Number';

function TimeLine() {
	return (
		<div className={css.timeLine}>
			<div className={css.container}>
				<div className={css.timeLine__header}>
					How to Take Part in the Public Sale
				</div>
				<div className={css.timeLine__row}>
					<div className={`${css.timeLine__row__side} ${css.empty}`}></div>
					<div className={css.timeLine__row__center}>
						<Number
							number={1}
							lineBot={true}
							active={true}
						/>
					</div>
					<div className={css.timeLine__row__side}>
						<Card >
							<div className={css.timeLine__row__header}>
								Activate your Profile
							</div>
							<p className={css.timeLine__row__text}>
								You’ll need an active PancakeSwap Profile to take part in an IFO!
							</p>
							<div>
								<Button>
									Connect Wallet
								</Button>
							</div>
						</Card>
					</div>
				</div>
				<div className={css.timeLine__row}>
					<div className={css.timeLine__row__side}>
						<Card >
							<div className={css.timeLine__row__header}>
								Lock CAKE in the CAKE pool
							</div>
							<p className={css.timeLine__row__text}>
								The maximum amount of CAKE you can commit to the Public Sale equals the number of your iCAKE, which is based on your veCAKE balance at the snapshot time of each IFO. Lock more CAKE for longer durations to increase the maximum CAKE you can commit to the sale.
							</p>
							<NavLink
								className={`--link ${css.timeLine__row__link}`}
							>
								How does the number of iCAKE calculated?
							</NavLink>
							<p className={css.timeLine__row__text}>
								Missed this IFO? Lock CAKE today for the next IFO, while enjoying a wide range of veCAKE benefits!
							</p>
						</Card>
					</div>
					<div className={css.timeLine__row__center}>
						<Number
							number={2}
							lineBot={true}
							lineTop={true}
						/>
					</div>
					<div className={`${css.timeLine__row__side} ${css.empty}`}>
					</div>
				</div>
				<div className={css.timeLine__row}>
					<div className={`${css.timeLine__row__side} ${css.empty}`}></div>
					<div className={css.timeLine__row__center}>
						<Number
							number={3}
							lineBot={true}
							lineTop={true}
						/>
					</div>
					<div className={css.timeLine__row__side}>
						<Card >
							<div className={css.timeLine__row__header}>
								Commit CAKE
							</div>
							<p className={css.timeLine__row__text}>
								When the IFO sales are live, you can click “commit” to commit CAKE and buy the tokens being sold.
							</p>
							<p className={css.timeLine__row__text}>
								You will need a separate amount of CAKE in your wallet balance to commit to the IFO sales.
							</p>
						</Card>
					</div>
				</div>
				<div className={css.timeLine__row}>
					<div className={css.timeLine__row__side}>
						<Card >
							<div className={css.timeLine__row__header}>
								Claim your tokens
							</div>
							<p className={css.timeLine__row__text}>
								After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent CAKE.
							</p>
						</Card>
					</div>
					<div className={css.timeLine__row__center}>
						<Number
							number={4}
							lineTop={true}
						/>
					</div>
					<div className={`${css.timeLine__row__side} ${css.empty}`}>
					</div>
				</div>
			</div>
		</div >
	)
}

export default TimeLine