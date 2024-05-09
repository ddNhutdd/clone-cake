import ChainSelector from 'src/templates/user/header-user/header-chain';
import css from './info-top.module.scss';
import Tabs from 'src/components/tabs';
import Input3 from 'src/components/input-3';
import InputSearch from './input-search';

function InfoTop() {
	return (
		<div className={css.infoTop}>
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
							<ChainSelector />
						</div>
					</div>
					<div className={css.infoTop__right}>
						<InputSearch />
					</div>
				</div>
			</div>
		</div>
	)
}

export default InfoTop