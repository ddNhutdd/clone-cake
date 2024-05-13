import Card, { cardType } from 'src/components/card';
import css from './cards.module.scss';
import Icake from './icake';
import Token from './token';
import ComingSoon from './coming-soon';
import { useTheme } from 'src/context/dark-theme';

const Cards = () => {
	//theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (

		<div className={`${css.cards} ${darkClass}`}>
			<div className={css.container}>
				<div className={css.cards__left}>
					<div className={css.cards__left__top}>
						<Card
							type={cardType.blueEffect}
							className={css.cards__icake}
						>
							<Icake />
						</Card>
					</div>
					<div className={css.cards__left__bot}>
						<Card
							type={cardType.blueEffect}
							className={css.cards__token}
						>
							<Token />
						</Card>
					</div>
				</div>
				<div className={css.cards__right}>
					<ComingSoon />
				</div>
			</div>
		</div>
	)
}

export default Cards;

