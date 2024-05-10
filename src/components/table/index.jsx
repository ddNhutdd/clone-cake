import { useTheme } from 'src/context/dark-theme';
import { Paging } from '../paging';
import css from './table.module.scss';
import PropTypes from 'prop-types'

function Table(props) {
	const {
		listCol,
		listRecord,
		currentPage,
		totalItems,
		onPageChange,
	} = props;



	// phần theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';





	// phần render table 
	const renderColumn = (listCol) => {
		return listCol?.map((item) => {
			return (
				<th key={item.key} style={item.style}>
					{item.header}
				</th>
			)
		})
	}
	const renderRecord = (listRecord, listCol) => {
		return listRecord.map(record => {
			return (
				<tr key={record.id}>
					{
						listCol.map(col => {
							return (
								<td key={col.key}>
									{record[col.key]}
								</td>
							)
						})
					}
				</tr>
			)
		})
	}
	const tableColumn = listCol?.length || 0;








	return (
		<div className={`${css.table} ${darkClass}`}>
			<table>
				<thead>
					<tr>
						{renderColumn(listCol)}
					</tr>
				</thead>
				<tbody>
					{renderRecord(listRecord, listCol)}
					<tr>
						<td colSpan={tableColumn}>
							<div className='flex justify-center'>
								<Paging
									currentPage={currentPage}
									totalItems={totalItems}
									onChange={onPageChange}
								/>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

Table.propTypes = {
	listCol: PropTypes.array,
	listRecord: PropTypes.array,

	currentPage: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	totalItems: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	onPageChange: PropTypes.func,
}

export default Table;

///
//const listCol = [
//	{
//		key: 'id',
//		header: '#'
//	},
//	{
//		key: 'name',
//		header: 'NAME'
//	}
//]
//const listRecord = [
//	{
//		id: '1',
//		name: 'name',
//	}
//]