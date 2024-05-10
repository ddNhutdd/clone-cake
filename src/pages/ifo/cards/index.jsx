import Card, { cardType } from 'src/components/card';
import css from './cards.module.scss';
import Icake from './icake';


const Cards = () => {
	return (
		<div className={css.cards}>
			<div className={css.cards__left}>
				<div className={css.cards__left__top}>
					<Card
						type={cardType.blueEffect}
					>
						<Icake />
					</Card>
				</div>
				<div className={css.cards__left__bot}>
					2
				</div>
			</div>
			<div className={css.cards__right}>
				3
			</div>
		</div>
	)
}

export default Cards;

