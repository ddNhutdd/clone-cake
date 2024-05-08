import React, { useState } from 'react';
import css from './chart.module.scss';
import Card from 'src/components/card';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import chartData from './chart-data.js';
import pancake from 'imgs/staking-1.png';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BsArrowsAngleExpand } from "react-icons/bs";
import Tabs2 from 'src/components/tabs-2';
import tabList from './tab-list';
import { useTheme } from 'src/context/dark-theme';
import useMediaQuery, { widthDevice } from 'src/hooks/useMedia';

function Chart() {

	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	// tab
	const [tabSelected, setTabSelected] = useState(tabList.at(0));
	const tabChangeHandle = (tab) => {
		setTabSelected(tab)
	}




	// kích thước màn hình
	const screen = useMediaQuery();
	const isShowExtend = screen !== widthDevice.width_576 &&
		screen !== widthDevice.width_768 &&
		screen !== widthDevice.width_992



	// border radius
	// nếu đang là drawer thì set border bottom radius là 0
	const borderBottomRadiusClass = !isShowExtend ? css.borderBottomRadiusNone : '';





	// extend
	const [isExtend, setIsExtend] = useState(false);
	const chartHeight = isExtend ? 500 : 300;
	const extendClass = isExtend ? css['chart--radius-0'] : '';
	const extendMargin = isExtend ? css['chart--mt-30'] : '';
	const extendClickHandle = () => {
		setIsExtend(e => !e);
	}

	return (
		<div className={`${css.chart} ${darkClass}`}>
			<Card
				classNameContent={`${css.chart__card} ${extendClass} ${borderBottomRadiusClass}`}
				className={`${extendClass} ${extendMargin} ${borderBottomRadiusClass}`}
			>
				<div className={css.chart__header}>
					<div className={css.chart__header__left}>
						<img src={pancake} alt={`img`} />
						<img src={pancake} alt={`img`} />
						BNB/CAKE
						<FaArrowRightArrowLeft />
					</div>
					{
						isShowExtend && <div onClick={extendClickHandle} className={css.chart__header__right}>
							<BsArrowsAngleExpand />
						</div>
					}
				</div>
				<div className={css.chart__info}>
					<div className={css.chart__info__left}>
						<div className={css.chart__info__main}>
							<div className={css.chart__info__value}>
								200.64
							</div>
							<div className={css.chart__info__token}>
								BNB/CAKE
							</div>
							<div className={css.chart__info__difference}>
								+3.507 (1.76%)
							</div>
						</div>
						<div className={css.chart__info__date}>
							Apr 24, 2024, 08:18 AM
						</div>
					</div>
					<div className={css.chart__info__right}>
						<Tabs2
							listTabs={tabList}
							selectedItem={tabSelected}
							onChange={tabChangeHandle}
						/>
					</div>
				</div>
				<div className={css.chart__chart}>
					<ResponsiveContainer width="100%" height={chartHeight}>
						<AreaChart
							data={chartData}
							margin={{
								top: 10,
								right: 30,
								left: 0,
								bottom: 0
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
						</AreaChart>
					</ResponsiveContainer>
				</div>
			</Card>
		</div>
	)
}

export default Chart