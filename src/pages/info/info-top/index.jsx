import ChainSelector from 'src/templates/user/header-user/header-chain';
import css from './info-top.module.scss';
import Tabs from 'src/components/tabs';
import InputSearch from './input-search';
import { useState } from 'react';
import { useTheme } from 'src/context/dark-theme';


function InfoTop() {



	//search
	const [showSearch, setShowSearch] = useState(false);
	const closeSearch = (ev) => {
		ev.stopPropagation();
		setShowSearch(false)
	}





	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';











	return (
		<div className={`${css.infoTop} ${darkClass}`}>
			<div className={css.container}>
				<div className={css.infoTop__content}>
					<div className={css.infoTop__left}>
						<div>
							<Tabs
								listTabs={[
									{
										id: 1,
										content: 'Overview',
										value: 'overview'
									},
									{
										id: 2,
										content: 'Pairs',
										value: 'pairs'
									},
									{
										id: 3,
										content: 'Tokens',
										value: 'tokens'
									}
								]}
								selectedItem={{
									id: 1,
									content: 'Overview',
									value: 'overview'
								}}
								onChange={() => { }}
							/>
						</div>
						<div>
							<ChainSelector stylePosition={{
								right: 0,
								top: '26px',
								paddingTop: '18px'
							}} />
						</div>
					</div>
					<div onClick={setShowSearch.bind(null, true)} className={css.infoTop__right}>
						<InputSearch
							show={showSearch}
							close={closeSearch}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InfoTop