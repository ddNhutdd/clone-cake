import Table from 'src/components/table';
import css from './transaction.module.scss';
import { useState } from 'react';
import { sortType } from 'src/constants';
import { shortenHash } from 'src/utils';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import BscScan from 'icons/bscscan.icon';
import Radio from 'src/components/radio';
import { useTheme } from 'src/context/dark-theme';



const column = {
	action: 'action',
	totalValue: 'Total Value',
	tokenAmount: 'Token Amount',
	tokenAmountAfter: 'Token Amount After',
	account: 'account',
	time: 'time'
}



function Transaction(props) {
	const {
		titleCss
	} = props;




	// phần theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';





	// render table 
	const [columnSort, setColumnSort] = useState([column.action, sortType.des]);
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
			key: column.action,
			header: (
				<span className='flex items-center relative' onClick={headerClickHandle.bind(null, column.action)}>
					ACTION
					<span style={{ width: '10px' }}>
						{
							isShowSortSvg(column.action, sortType.asc) && <GoArrowUp />
						}
						{
							isShowSortSvg(column.action, sortType.des) && <GoArrowDown />
						}
					</span>
				</span>
			),
		},
		{
			key: column.totalValue,
			header: (
				<span className='flex items-center relative' onClick={headerClickHandle.bind(null, column.totalValue)}>
					TOTAL VALUE
					<span style={{ width: '10px' }}>
						{
							isShowSortSvg(column.totalValue, sortType.asc) && <GoArrowUp />
						}
						{
							isShowSortSvg(column.totalValue, sortType.des) && <GoArrowDown />
						}
					</span>
				</span>
			)
		},
		{
			key: column.tokenAmount,
			header: (
				<span className='flex items-center relative' onClick={headerClickHandle.bind(null, column.tokenAmount)}>
					TOKEN AMOUNT
					<span style={{ width: '10px' }}>
						{
							isShowSortSvg(column.tokenAmount, sortType.asc) && <GoArrowUp />
						}
						{
							isShowSortSvg(column.tokenAmount, sortType.des) && <GoArrowDown />
						}
					</span>
				</span>
			)
		},
		{
			key: column.tokenAmountAfter,
			header: (
				<span className='flex items-center relative' onClick={headerClickHandle.bind(null, column.tokenAmountAfter)}>
					TOKEN AMOUNT
					<span style={{ width: '10px' }}>
						{
							isShowSortSvg(column.tokenAmountAfter, sortType.asc) && <GoArrowUp />
						}
						{
							isShowSortSvg(column.tokenAmountAfter, sortType.des) && <GoArrowDown />
						}
					</span>
				</span>
			)
		},
		{
			key: column.account,
			header: (
				<span className='flex items-center relative' onClick={headerClickHandle.bind(null, column.account)}>
					ACCOUNT
					<span style={{ width: '10px' }}>
						{
							isShowSortSvg(column.account, sortType.asc) && <GoArrowUp />
						}
						{
							isShowSortSvg(column.account, sortType.des) && <GoArrowDown />
						}
					</span>
				</span>
			)
		},
		{
			key: column.time,
			header: (
				<span className='flex items-center relative' onClick={headerClickHandle.bind(null, column.time)}>
					TIME
					<span style={{ width: '10px' }}>
						{
							isShowSortSvg(column.time, sortType.asc) && <GoArrowUp />
						}
						{
							isShowSortSvg(column.time, sortType.des) && <GoArrowDown />
						}
					</span>
				</span>
			)
		}
	]
	const listRecord = [
		{
			id: 1,
			[column.action]: (
				<span className={css.transaction__actionCell}>
					<NavLink to={``} className={`--link`}>
						Remote ALPHA and WBNB
						<BscScan />
					</NavLink>
				</span>
			),
			[column.totalValue]: '$25.05',
			[column.tokenAmount]: '114.34 ALPHA',
			[column.tokenAmountAfter]: '0.021 WBNB',
			[column.account]: (
				<span className={css.transaction__accountCell}>
					<NavLink to={``} className={`--link`}>
						{shortenHash(`0xfe372a3ac834e871971e220d91b7e58c30acd948c4ae5077053d3844ecc130fc`)}
						<BscScan />
					</NavLink>
				</span>
			),
			[column.time]: `2 minutes`
		}
	]





	// phần radio
	const radioName = 'transaction'
	const radioChangeHandle = (value, ev) => {

	}




	return (
		<div className={`${css.transaction} ${darkClass}`}>
			<div className={titleCss}>
				Transaction
			</div>
			<div className={css.transaction__listRadio}>
				<Radio
					name={radioName}
					onChange={radioChangeHandle}
					value={`all`}
					defaultChecked={true}
				>
					All
				</Radio>
				<Radio
					name={radioName}
					onChange={radioChangeHandle}
					value={`swaps`}
				>
					Swaps
				</Radio>
				<Radio
					name={radioName}
					onChange={radioChangeHandle}
					value={`adds`}
				>
					Adds
				</Radio>
				<Radio
					name={radioName}
					onChange={radioChangeHandle}
					value={`removes`}
				>
					Removes
				</Radio>
			</div>
			<div className={css.transaction__tableContainer}>
				<Table
					listCol={listCol}
					listRecord={listRecord}
					currentPage={1}
					totalItems={1}
					onPageChange={() => { }}
				/>
			</div>
		</div >
	)
}

export default Transaction