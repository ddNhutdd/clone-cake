import Tabs from 'src/components/tabs';
import css from './manage.module.scss';
import { FaArrowLeft } from "react-icons/fa6";
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import Tokens from './tokens';
import List from './list';

function Manage(props) {
	const {
		prevStep,
		closeModal
	} = props;

	// tabs
	const tabType = {
		lists: 'lists',
		tokens: 'tokens'
	}
	const listTab = [
		{
			id: 1,
			content: 'Lists',
			value: tabType.lists
		},
		{
			id: 2,
			content: 'Tokens',
			value: tabType.tokens
		}
	]
	const [tabSelected, setTabSelected] = useState(listTab.at(0));
	const tabChangeHandle = (item) => {
		setTabSelected(item)
	}

	const renderContent = (content) => {
		switch (content) {
			case tabType.tokens:
				return (
					<Tokens />
				);

			case tabType.lists:
				return (
					<List />
				);

			default:
				break;
		}
	}

	return (
		<div className={css.manage}>
			<div className={css.manage__header}>
				<div onClick={prevStep} className={css.manage__button}>
					<FaArrowLeft />
				</div>
				<div className={css.manage__title}>
					Manage
				</div>
				<div onClick={closeModal} className={css.manage__button}>
					<IoClose />
				</div>
			</div>
			<div className={css.manage__body}>
				<div className={css.manage__tab}>
					<Tabs
						onChange={tabChangeHandle}
						listTabs={listTab}
						selectedItem={tabSelected}
					/>
				</div>
				<div>
					{renderContent(tabSelected.value)}
				</div>
			</div>

		</div>
	)
}

export default Manage