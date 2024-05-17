import Card from 'src/components/card';
import css from './item.module.scss';
import Header from '../header';
import Footer from '../footer';
import { ToolTip, tooltipPosition } from 'src/components/tooltip';
import { AiOutlineCalculator } from "react-icons/ai";
import Button, { buttonClassesType } from 'src/components/button';
import { useContext } from 'react';
import { DrillContext } from 'src/context/drill';
import { useTheme } from 'src/context/dark-theme';

function Item() {
	// modal calculator
	const { openModal } = useContext(DrillContext);

	// theme 
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<Card
			className={`${css.item} ${darkClass}`}
			classNameContent={css.item__content}
		>
			<Header />
			<div className={css.item__content__main}>
				<div className={`${css[`item--row`]} mb-2`}>
					<div>
						<ToolTip
							className={css.item__tooltip}
							content="Calculated based on current rates and subject to change based on various external variables. It is a rough estimate provided for convenience only, and by no means represents guaranteed returns."
							position={tooltipPosition.bottom}
						>
							APR:
						</ToolTip>
					</div>
					<div className={css.item__tooltip__value}>
						2.26%
						<AiOutlineCalculator onClick={openModal} />
					</div>
				</div>
				<div className={css[`item--title`]}>
					<span className={css[`item--titleHight`]}>
						PEPE
					</span>
					{" "}
					EARNED
				</div>
				<div className={`${css[`item--row`]} mb-2`}>
					<div>
						<div className={css[`item--disableBold`]}>
							0
						</div>
						<div className={css[`item--disable`]}>
							0 USD
						</div>
					</div>
					<div>
						<Button type={buttonClassesType.disaled}>
							Harvest
						</Button>
					</div>
				</div>
				<div className={css[`item--title`]}>
					STAKE
					{" "}
					<span className={css[`item--titleHight`]}>
						CAKE
					</span>
				</div>
				<div>
					<Button className={`w-100`}>
						Enable
					</Button>
				</div>
			</div>
			<Footer />
		</Card>
	)
}

export default Item