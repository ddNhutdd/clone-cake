import Table from 'src/components/table';
import css from './top-pair.module.scss';
import { useState } from 'react';
import { sortType } from 'src/constants';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import bnb from 'imgs/staking-2.png';

const column = {
	stt: 'stt',
	name: 'name',
	pair: 'pair',
	volume24h: 'volume24h',
	volume7d: 'volume7d',
	lPrewardFees24h: 'lPrewardFees24h',
	lPRewardAPR: 'lPRewardAPR',
	liquidity: 'liquidity'
}



function TopPair(props) {
	const {
		titleCss
	} = props;

	const [columnSort, setColumnSort] = useState([column.name, sortType.asc]);


	const headerClickHandle = (columnName) => {
		const [name, sort] = columnSort;
		if (name === columnName) {
			setColumnSort([name, sort === sortType.asc ? sortType.des : sortType.asc]);
		} else if (name !== columnName) {
			setColumnSort([columnName, sortType.des]);
		}
	}

	const isShowSortSvg = (columnName, sortType) => {
		return columnSort?.at(0) === columnName && columnSort?.at(1) === sortType ? true : false;
	}


	const listCol = [
		{
			key: column.stt,
			header: '#'
		},
		{
			key: column.pair,
			header: (
				<span className='flex items-center relative' onClick={headerClickHandle.bind(null, column.pair)}>
					PAIR
					<span style={{ width: '10px' }}>
						{
							isShowSortSvg(column.pair, sortType.asc) && <GoArrowUp />
						}
						{
							isShowSortSvg(column.pair, sortType.des) && <GoArrowDown />
						}
					</span>
				</span>
			),
			style: {
				width: '300px'
			}
		},
		{
			key: column.volume24h,
			header: (
				<span className='flex items-center relative' onClick={headerClickHandle.bind(null, column.volume24h)}>
					VOLUME 24H
					<span style={{ width: '10px' }}>
						{
							isShowSortSvg(column.volume24h, sortType.asc) && <GoArrowUp />
						}
						{
							isShowSortSvg(column.volume24h, sortType.des) && <GoArrowDown />
						}
					</span>
				</span>
			)
		},
		{
			key: column.volume7d,
			header: (
				<span className='flex items-center relative' onClick={headerClickHandle.bind(null, column.volume7d)}>
					VOLUME 7D
					<span style={{ width: '10px' }}>
						{
							isShowSortSvg(column.volume7d, sortType.asc) && <GoArrowUp />
						}
						{
							isShowSortSvg(column.volume7d, sortType.des) && <GoArrowDown />
						}
					</span>
				</span>
			)
		},
		{
			key: 'lPrewardFees24h',
			header: (
				<span className='flex items-center relative' onClick={headerClickHandle.bind(null, column.lPrewardFees24h)}>
					LP REWARD FEES 24H
					<span style={{ width: '10px' }}>
						{
							isShowSortSvg(column.lPrewardFees24h, sortType.asc) && <GoArrowUp />
						}
						{
							isShowSortSvg(column.lPrewardFees24h, sortType.des) && <GoArrowDown />
						}
					</span>
				</span>
			)
		},
		{
			key: 'lPRewardAPR',
			header: (
				<span className='flex items-center relative' onClick={headerClickHandle.bind(null, column.lPRewardAPR)}>
					LP reward APR
					<span style={{ width: '10px' }}>
						{
							isShowSortSvg(column.lPRewardAPR, sortType.asc) && <GoArrowUp />
						}
						{
							isShowSortSvg(column.lPRewardAPR, sortType.des) && <GoArrowDown />
						}
					</span>
				</span>
			)
		},
		{
			key: 'liquidity',
			header: (
				<span className='flex items-center relative' onClick={headerClickHandle.bind(null, column.liquidity)}>
					LIQUIDITY
					<span style={{ width: '10px' }}>
						{
							isShowSortSvg(column.liquidity, sortType.asc) && <GoArrowUp />
						}
						{
							isShowSortSvg(column.liquidity, sortType.des) && <GoArrowDown />
						}
					</span>
				</span>
			)
		}
	]
	const listRecord = [
		{
			id: 1,
			[column.stt]: '1',
			[column.pair]: (
				<div className={css.topPair__pairColumn}>
					<img src={bnb} alt='dk' />
					<img src={bnb} alt='dk' />
					SKY/HELP
				</div>
			),
			[column.volume24h]: '$0.00',
			[column.volume7d]: '$0.00',
			[column.lPrewardFees24h]: '$0.00',
			[column.lPRewardAPR]: '0.00%',
			[column.liquidity]: '$316.22K'
		}
	]


	return (
		<div className={css.topPair}>
			<div className={titleCss}>
				Top Pairs
			</div>
			<div className={css.topPair__tableContainer}>
				<Table
					listCol={listCol}
					listRecord={listRecord}
					currentPage={1}
					totalItems={1}
					onPageChange={() => { }}
				/>
			</div>
		</div>
	)
}

export default TopPair