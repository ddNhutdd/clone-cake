import Row from '../../row';
import TableHeader from '../../table-header';
import css from './screen-large.module.scss';

function ScreenLarge() {
	return (
		<div className={css.screenLarge}>
			<TableHeader />
			<Row />
		</div>
	)
}

export default ScreenLarge