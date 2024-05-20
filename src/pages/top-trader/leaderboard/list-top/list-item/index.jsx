import Item from '../../item';
import css from './list-item.module.scss';

function ListItem(props) {
	const {
		list
	} = props;

	const renderList = () => {
		return list?.map((item, index) => {
			return (
				<div key={index} className={css.listItem__item}>
					<Item />
				</div>
			)
		})
	}
	return (
		<div className={css.listItem}>
			{renderList()}
		</div>
	)
}

export default ListItem