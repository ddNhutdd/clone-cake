import HeaderComponent from 'src/components/header-component';
import css from './buy-crypto.module.scss';
import FooterComponent from 'src/components/footer-component';
import { HeaderComponentList3 } from 'src/constants/header-component-list-3';
import Card from 'src/components/card';
import FaqItem from './faq-item';
import { NavLink } from 'react-router-dom';
import { FaRotateRight } from "react-icons/fa6";
import Input from './input';

function BuyCrypto() {
	return (
		<div className={css.buyCrypto}>
			<HeaderComponent list={HeaderComponentList3} />
			<div className={css.container}>
				<Card className={`${css.buyCrypto__card} ${css.top}`}>
					<div className={css.buyCrypto__top__header}>
						<div>
							<div className={css.buyCrypto__top__header__title}>
								Buy Crypto
							</div>
							<div>
								Buy crypto in just a few clicks
							</div>
						</div>
						<div>
							<div className={css.buyCrypto__circle}>
								<FaRotateRight />
							</div>
						</div>
					</div>
					<div className={css.buyCrypto__top__content}>
						<div>
							<Input />
						</div>
						<div>
							<Input />
						</div>
					</div>
				</Card>
				<Card className={`${css.buyCrypto__card} ${css.bot}`}>
					<div className={css.buyCrypto__bot__header}>
						FAQ
					</div>
					<div className={css.buyCrypto__bot__content}>
						<FaqItem
							title={`Why can't I see my bitcoin purchase`}
							content={`Transfers through the Bitcoin network may take longer due to network congestion. Please check your BTC address again after a few hours.`}
						/>
						<FaqItem
							title={`Why can’t I see quotes from providers?`}
							content={`Some providers might not operate in your region or support the currency/token exchange requested.`}
						/>
						<FaqItem
							title={`What fiat currencies are supported?`}
							content={(
								<div>
									Different providers will support different currencies and payment methods in your region. Please refer to our
									{" "}
									<NavLink className={`--primary-navy-blue --link`}>
										documentation
									</NavLink>
									{" "}
									or
									{" "}
									<NavLink className={`--primary-navy-blue --link`}>
										partners documentation
									</NavLink>
									{" "}
									for more info.
								</div>
							)}
						/>
						<FaqItem
							title={`Where can find more information on the Buy Crypto feature?`}
							content={(
								<div>
									Please refer to our documentation
									{" "}
									<NavLink className={`--primary-navy-blue --link`}>
										here.
									</NavLink>
								</div>
							)}
						/>
					</div>
				</Card>
			</div>
			<FooterComponent />
		</div>
	)
}

export default BuyCrypto