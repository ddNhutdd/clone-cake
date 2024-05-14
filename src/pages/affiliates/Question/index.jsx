import Card from 'src/components/card';
import css from './question.module.scss';
import Row from './row';
import { NavLink } from 'react-router-dom';

function Question() {
	return (
		<div className={css.question}>
			<div className={css.question__topBackground}></div>
			<div className={css.container}>
				<div className={css.question__header}>
					Still Got Questions?
				</div>
				<Card>
					<div className={css.question__cardHeader}>
						FAQ
					</div>
					<div className={css.question__content}>
						<Row title="What is the criteria to become a PancakeSwap affiliate?">
							<ul>
								<li>
									At least 10,000 followers across social media platforms such as Twitter, Youtube, Discord, Instagram and Telegram
								</li>
								<li>
									Proven track record of creating quality content related to crypto and especially DeFi
								</li>
								<li>
									Strong understanding of PancakeSwap and our ecosystem
								</li>
							</ul>
						</Row>
						<Row title="How do I earn commissions as an affiliate?">
							<ul>
								<li>
									You earn commissions from most trading fees paid by your invitees for a limited period of time
								</li>
								<li>
									Trading pairs must meet the following eligibility criteria:
								</li>
								<li>
									Pairs must be in the PancakeSwap Token list for the following chains (
									<NavLink>BNB Chain</NavLink>, <NavLink>Arbitrum One</NavLink>, <NavLink>Base</NavLink>, <NavLink>Ethereum</NavLink>, <NavLink>Linea</NavLink>, <NavLink>Polygon zkEVM</NavLink>, <NavLink>zkSync Era</NavLink>)
								</li>
								<li>
									Pairs must include at least 1 major token (i.e., BNB, BTC, BUSD, ETH, MATIC, ARB, DAI, USDT and/or USDC)
								</li>
							</ul>
						</Row>
						<Row title="How will I receive my commissions and how often will I be paid?">
							<ul>
								<li>
									You will receive your commissions on a monthly basis. This means that you will receive payments for your commissions earned in the previous month at the beginning of each month.
								</li>
								<li>
									You will be able to redeem your CAKE rewards from the affiliate dashboard page. Once redeemed, PancakeSwap will transfer the commission amount earned to your designated wallet. You will be able to see the details of each payment in your affiliate dashboard, including the amount, date, and status of each payment.
								</li>
							</ul>
						</Row>
						<Row title="How do I track my referrals and commissions?">
							<ul>
								<li>
									Affiliates can login to the affiliate dashboard and view your referral and commission information
								</li>
								<li>
									Your referrals will be listed in your affiliate dashboard, along with the date they were made, their status, and the commission amount earned
								</li>
							</ul>
						</Row>
						<Row title="Is there a limited number of referrals i can refer?">
							<ul>
								<li>
									No, users can refer as many friends as they wish
								</li>
							</ul>
						</Row>
					</div>
				</Card>
			</div>
		</div>
	)
}

export default Question