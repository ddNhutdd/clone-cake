import Card, { cardType } from "src/components/card";
import ScreenLarge from "./screen-large";
import css from './my-rank.module.scss';
import useMediaQuery, { widthDevice } from "src/hooks/useMedia";
import Item from "../item";

function MyRank() {
	// responsive
	const screen = useMediaQuery();

	return (
		<Card
			type={cardType.blueEffect}
			className={css.cardType}
		>
			{
				(screen === widthDevice.width_576 ||
					screen === widthDevice.width_768 ||
					screen === widthDevice.width_968) ?
					<Item showMyRankText={true} /> :
					<ScreenLarge />
			}
		</Card>
	)
}

export default MyRank