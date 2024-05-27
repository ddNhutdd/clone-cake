import Card, { cardType } from 'src/components/card';
import css from './chart-container.module.scss';
import Top from './top';
import Chart from './chart';

function ChartContainer() {
	return (
		<Card
			className={css.chartContainer}
			classNameContent={css.chartContainerContent}
			type={cardType.flat}
		>
			<Top />
			<Chart />
		</Card>
	)
}

export default ChartContainer