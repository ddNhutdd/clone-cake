import { Paging } from 'src/components/paging';
import css from './list-top.module.scss';
import ListRow from './list-row';
import Card from 'src/components/card';
import useMediaQuery, { widthDevice } from 'src/hooks/useMedia';
import ListItem from './list-item';

function ListTop() {
	//responsive 
	const screen = useMediaQuery();

	// list 
	const list = (new Array(10)).fill(null);

	return (
		<Card
			className={css.listTop}
			classNameContent={css.listTopContent}
		>
			{
				screen === widthDevice.width_576 ||
					screen === widthDevice.width_768 ||
					screen === widthDevice.width_968 ?
					<ListItem list={list} /> :
					<ListRow list={list} />
			}
			<div className={css.listTop__paging}>
				<Paging
					currentPage={1}
					totalItems={40}
					onChange={() => { }}
				/>
			</div>
		</Card>
	)
}

export default ListTop