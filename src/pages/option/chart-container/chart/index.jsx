import { useEffect, useRef, useState } from 'react';
import css from './chart.module.scss';
import data from './candlesstickData.js';
import { createChart, CrosshairMode } from 'lightweight-charts';
import { FaChevronLeft, FaChevronRight, FaMinus, FaPlus } from 'react-icons/fa6';

function Chart() {
	const chartElementRef = useRef();
	const [chartValue, setChartValue] = useState({});

	const obsersizeCallback = (entries) => {
		for (const entry of entries) {
			chartElementRef.current.resize(entry?.contentRect.width, entry?.contentRect.height)
		}
	}

	const renderChartValue = () => {
		if (!chartValue?.high) {
			return;
		}
		return (
			<>
				open:
				{" "}
				<span className={renderColor()}>
					{chartValue?.open}
				</span>
				{" "}
				, high:
				{" "}
				<span className={renderColor()}>
					{chartValue?.high}
				</span>
				{" "}
				, low:
				{" "}
				<span className={renderColor()}>
					{chartValue?.low}
				</span>
				{" "}
				, close:
				{" "}
				<span className={renderColor()}>
					{chartValue?.close}
				</span>
				{" "}
				, time:
				{" "}
				<span className={renderColor()}>
					{chartValue?.time}
				</span>
			</>
		)
	}
	const renderColor = () => {
		return chartValue?.close > chartValue?.open ? css.green : css.red
	}

	const stopPropagation = (e) => {
		e.stopPropagation();
	}

	const shiftChart = (diff) => {
		const currentPos = chartElementRef.current.timeScale().scrollPosition();
		chartElementRef.current.timeScale().scrollToPosition(currentPos + diff, false);
	}

	const scaleChart = (pct, zoomIn) => {
		const currentRange = chartElementRef.current.timeScale().getVisibleLogicalRange();
		if (currentRange) {
			const bars = currentRange.to - currentRange.from;
			const direction = zoomIn ? -1 : 1;
			const newRangeBars = bars * pct * direction + bars;
			chartElementRef.current.timeScale().setVisibleLogicalRange({
				to: currentRange.to,
				from: currentRange.to - newRangeBars,
			});
		}
	}

	useEffect(() => {
		const chartContainerElement = document.getElementById('optionMainChart');
		const chart = createChart(chartContainerElement);
		const candleStickData = data;
		const mainSeries = chart.addCandlestickSeries();
		mainSeries.setData(candleStickData);
		chart.timeScale().fitContent();
		chart.applyOptions({
			crosshair: {
				mode: CrosshairMode.Normal,
			},
			grid: {
				vertLines: {
					color: '#eeeeee',
				},
				horzLines: {
					color: '#eeeeee',
				}
			},
			handleScroll: {
				mouseWheel: false,
				horzTouchDrag: false,
				vertTouchDrag: false
			},
		});
		chart.subscribeCrosshairMove(param => {
			const map = param.seriesData;
			const iterator = map.entries();
			const firstEntry = iterator.next().value;
			const data = firstEntry?.at(-1);
			const { open, high, low, close, time } = (data || {});
			if (!open) {
				return;
			}
			setChartValue({
				open,
				high,
				low,
				close,
				time
			})
		});

		// lưu trữ chart
		chartElementRef.current = chart;

		// resize chart
		const sizeObserver = new ResizeObserver(obsersizeCallback)
		sizeObserver.observe(chartContainerElement);

		// ngăn chặn sự kiện mouse scroll trên phần tử 
		chartContainerElement.addEventListener("wheel", stopPropagation, true);

		return () => {
			sizeObserver.disconnect();
			chartContainerElement.removeEventListener("wheel", stopPropagation);
		}

	}, [])

	return (
		<div className={css.chart}>
			<div className={css.chart__top}>
				{renderChartValue()}
			</div>
			<div className={css.chart__mainContainer}>
				<div className={css.chart__main} id="optionMainChart">
				</div>
				<div className={css.chart__action}>
					<div className={css.chart__actionGroup}>
						<button
							onClick={scaleChart.bind(null, 1 / 8, false)}
						>
							<FaMinus />
						</button>
						<button
							onClick={scaleChart.bind(null, 1 / 8, true)}
						>
							<FaPlus />
						</button>
					</div>
					<div className={css.chart__actionGroup}>
						<button
							onClick={shiftChart.bind(null, -10)}
						>
							<FaChevronLeft />
						</button>
						<button
							onClick={shiftChart.bind(null, 10)}
						>
							<FaChevronRight />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Chart