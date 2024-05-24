import { useEffect, useRef } from 'react';
import css from './chart.module.scss';
import { createChart, CrosshairMode, LineStyle } from 'lightweight-charts';
import candlesstickData from './candlesstickData.js';
import { BiLineChart } from "react-icons/bi";
import { LuCandlestickChart } from 'react-icons/lu';
import { FaChartColumn } from 'react-icons/fa6';

const chartType = {
	candle: 'candle',
	line: 'line'
}

function Chart() {
	// chart Element
	const chartRef = useRef();
	const candlesSeriesRef = useRef();
	const lineSeriesRef = useRef();

	// line 
	const lineClickHandle = () => {
		chartRef.current.removeSeries(candlesSeriesRef.current);
		candlesSeriesRef.current = null;

		const lineData = candlesstickData.map(item => ({
			time: item.time, value: item.high
		}))

		lineSeriesRef.current = chartCreate(chartRef.current, lineData, chartType.line, {
			crosshairMarkerVisible: false
		});
	}

	// tùy chỉnh chart 
	const chartOption = {
		grid: {
			vertLines: {
				visible: false
			},
			horzLines: {
				visible: false
			}
		},
		crosshair: {
			mode: CrosshairMode.Normal,

			vertLine: {
				width: 8,
				color: "transparent",
				style: LineStyle.Solid,
			},


			horzLine: {
				color: "transparent",
			},
		},
	}

	// tạo candle chart
	const chartCreate = (chart, data, type, option = {}) => {
		switch (type) {
			case chartType.candle:
				const candlesSeries = chart.addCandlestickSeries(option);
				candlesSeries.setData(data);
				candlesSeries.priceScale().applyOptions({
					autoScale: false,
					scaleMargins: {
						top: 0.1,
						bottom: 0.2,
					},
				});
				return candlesSeries;

			case chartType.line:
				const lineSeries = chart.addLineSeries(option);
				lineSeries.setData(data);
				lineSeries.priceScale().applyOptions({
					autoScale: false,
					scaleMargins: {
						top: 0.1,
						bottom: 0.2,
					},
				});
				return lineSeries;

			default:
				break;
		}
	}

	// obsersize callback
	const obsersizeCallback = (entries) => {
		for (const entry of entries) {
			chartRef.current.resize(entry?.contentRect.width, entry?.contentRect.height)
		}
	}

	useEffect(() => {
		const chartContainerElement = document.getElementById('container');

		const chart = createChart(chartContainerElement);

		// tùy chỉnh chart 
		chart.applyOptions(chartOption);
		chart.timeScale().fitContent();

		// candle
		const candleStickData = candlesstickData;
		candlesSeriesRef.current = chartCreate(chart, candleStickData, chartType.candle)

		// resize chart
		const sizeObserver = new ResizeObserver(obsersizeCallback)
		sizeObserver.observe(chartContainerElement);

		// lưu trữ lại chart
		chartRef.current = chart;

		return () => {
			chart.remove();
			sizeObserver.disconnect();
		}
	}, []);

	return (
		<div className={css.chart}>
			<div className={css.chart__header}>
				<button>
					<LuCandlestickChart />
				</button>
				<button onClick={lineClickHandle}>
					<BiLineChart />
				</button>
				<button>
					<FaChartColumn />
				</button>
			</div>
			<div className={css.chart__body}>
				<div className={css.chart__side}>
					side
				</div>
				<div
					id="container"
					className={css.chart__main}
				/>
			</div>
		</div>
	)
}

export default Chart