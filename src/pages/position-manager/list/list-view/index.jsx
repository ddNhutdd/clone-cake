import css from './list-view.module.scss';
import Row from './row';

function ListView() {
	return (
		<div className={css.listView}>
			<div className={css.container}>
				
				<Row />
			</div>
		</div>
	)
}

export default ListView