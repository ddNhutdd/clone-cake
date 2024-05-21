import Card from 'src/components/card';
import css from './list-view.module.scss';
import Row from './row';

function ListView() {
	return (
		<div className={css.listView}>
			<div className={css.container}>
				<Card
					className={css.listView__card}
					classNameContent={css.listView__cardContent}
				>
					<Row />
					<Row />
					<Row />
					<Row />
				</Card>
			</div>
		</div>
	)
}

export default ListView