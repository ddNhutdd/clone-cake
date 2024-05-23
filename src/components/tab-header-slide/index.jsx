import css from './tab-header-slide.module.scss';

function TabHeaderSlide(props) {
	const {
		list,
		selectedItem = list?.at(0),
		onChange
	} = props;

	// render list
	const widthValue = 100 / list?.length;
	const renderList = (list) => {
		return list?.map(item => (
			<div
				key={item.content}
				style={{ width: widthValue + "%" }}
				className={`${css.tabHeaderSlide__item} ${renderActive(item)}`}
				onClick={itemClickHandle.bind(null, item)}
			>
				{item.content}
			</div>
		))
	}
	const renderActive = (item) => {
		return item.content === selectedItem.content ? css.active : '';
	}
	const itemClickHandle = (item) => {
		onChange(item);
	}

	// tính active
	const findIndex = list?.findIndex(item => item.content === selectedItem.content);
	const left = findIndex * widthValue;

	return (
		<div className={css.tabHeaderSlide}>
			{renderList(list)}
			<div
				style={{ width: widthValue + "%", left: left + "%" }}
				className={css.tabHeaderSlide__active}
			/>
		</div>
	)
}

export default TabHeaderSlide;