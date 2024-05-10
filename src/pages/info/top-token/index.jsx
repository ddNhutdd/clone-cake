import Table from 'src/components/table';
import css from './top-token.module.scss';
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { sortType } from 'src/constants';
import { useState } from 'react';


const column = {
	name: 'name',
	price: 'price',
	priceChange: 'priceChange',
	volumn24h: 'volumn24h',
	liquidity: 'liquidity'
}


function TopToken(props) {
	const {
		titleCss
	} = props;


	//render table 
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
			key: 'stt',
			header: '#',
			style: {
				width: '20px'
			}
		},
		{
			key: 'name',
			header: (
				<span className='flex items-center relative' onClick={headerClickHandle.bind(null, column.name)}>
					NAME
					<span style={{ width: '10px' }}>
						{
							isShowSortSvg(column.name, sortType.asc) && <GoArrowUp />
						}
						{
							isShowSortSvg(column.name, sortType.des) && <GoArrowDown />
						}
					</span>
				</span>
			),
			style: {
				width: `400px`
			}
		},
		{
			key: 'price',
			header: (
				<span className='flex items-center' onClick={headerClickHandle.bind(null, column.price)}>
					PRICE
					<span style={{ width: '10px' }}>
						{
							isShowSortSvg(column.price, sortType.asc) && <GoArrowUp />
						}
						{
							isShowSortSvg(column.price, sortType.des) && <GoArrowDown />
						}
					</span>
				</span>
			),
			style: {
				width: `150px`
			}
		},
		{
			key: 'priceChange',
			header: (
				<span className='flex items-center' onClick={headerClickHandle.bind(null, column.priceChange)}>
					PRICE CHANGE
					<span style={{ width: '10px' }}>
						{
							isShowSortSvg(column.priceChange, sortType.asc) && <GoArrowUp />
						}
						{
							isShowSortSvg(column.priceChange, sortType.des) && <GoArrowDown />
						}
					</span>
				</span>
			),
			style: {
				width: `150px`
			}
		},
		{
			key: 'volumn24h',
			header: (
				<span className='flex items-center' onClick={headerClickHandle.bind(null, column.volumn24h)}>
					VOLUMN 24H
					<span style={{ width: '10px' }}>
						{
							isShowSortSvg(column.volumn24h, sortType.asc) && <GoArrowUp />
						}
						{
							isShowSortSvg(column.volumn24h, sortType.des) && <GoArrowDown />
						}
					</span>
				</span>
			),
			style: {
				width: `150px`
			}
		},
		{
			key: 'liquidity',
			header: (
				<span className='flex items-center' onClick={headerClickHandle.bind(null, column.liquidity)}>
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
			),
			style: {
				width: `150px`
			}
		}
	]
	const listRecord = [
		{
			id: 1,
			stt: 1,
			name: 'fdsa',
			price: '$0.99',
			priceChange: (
				<span className={`--green flex items-center`}>
					<GoArrowUp />
					0.11%
				</span>
			),
			volumn24h: '$138.27M',
			liquidity: '$131.41M'
		}
	]






	return (
		<div className={css.topToken}>
			<div className={titleCss}>
				Top Token
			</div>
			<div className={css.topToken__tableContainer}>
				<Table
					listCol={listCol}
					listRecord={listRecord}
					currentPage={1}
					totalItems={100}
					onPageChange={() => { }}
				/>
			</div>
		</div>
	)
}

export default TopToken