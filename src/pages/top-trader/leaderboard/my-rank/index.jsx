import Card, { cardType } from "src/components/card";
import ScreenLarge from "./screen-large";
import css from './my-rank.module.scss';

function MyRank() {
	return (
		<Card
			type={cardType.blueEffect}
			className={css.cardType}
		>
			<ScreenLarge />
		</Card>
	)
}

export default MyRank