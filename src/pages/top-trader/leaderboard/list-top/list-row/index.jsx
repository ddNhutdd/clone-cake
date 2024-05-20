import Row from '../../row';
import TableHeader from '../../table-header';
import css from './list-row.module.scss';

function ListRow(props) {
	const { list } = props;
	const renderRow = () => {
		return list?.map((item, index) => <Row key={index} />)
	}
	return (
		<div className={css.listRow}>
			<TableHeader />
			<div className={css.listRow__body}>
				{renderRow()}
			</div>
		</div>
	)
}

export default ListRow