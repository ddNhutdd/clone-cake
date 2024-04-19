import Pill, { pillType } from 'src/components/pill';
import css from './provider-drawer-content.module.scss';
import { FaArrowDown } from "react-icons/fa6";
import { IoMdCheckmark } from 'react-icons/io';
import Provider from '../provider';

function ProviderDrawerContent() {

	const providerList = [{
		img: <img src='https://assets.pancakeswap.finance/web/onramp/transak.svg' alt='transak' />,
		name: `Transak`,
		exchange: `1 BNB = $534.85`,
		pill: (
			<Pill
				type={pillType.success}
				className={'gap-1'}
			>
				Best Price
				<IoMdCheckmark />
			</Pill>
		)
	},
	{
		img: <img src='https://assets.pancakeswap.finance/web/onramp/mercuryo.svg' alt='mercuryo' />,
		name: `Mercuryo`,
		exchange: `1 BNB = $541.17`,
		pill: (
			<Pill
				type={pillType.fail}
				className={'gap-1'}
			>
				-0.048%
				<FaArrowDown />
			</Pill>
		)
	},
	{
		img: <img src='https://assets.pancakeswap.finance/web/onramp/moonpay.svg' alt='moonpay' />,
		name: `Moonpay`,
		exchange: `1 BNB = $539.70`,
		pill: (
			<Pill
				type={pillType.fail}
				className={'gap-1'}
			>
				-0.337
				<FaArrowDown />
			</Pill>
		)
	}]

	const renderList = (list) => {
		return list?.map(item => {
			return <Provider
				img={item.img}
				name={item.name}
				exchange={item.exchange}
				pill={item.pill}
				isButton={false}
			/>;
		})
	}

	return (
		<div className={css.providerDrawerContent}>
			<div className={css.providerDrawerContent__header}>
				Choose a Provider
			</div>
			<div className={css.providerDrawerContent__line}></div>
			<div className={css.providerDrawerContent__content}>
				{renderList(providerList)}
			</div>
		</div>
	)
}

export default ProviderDrawerContent;