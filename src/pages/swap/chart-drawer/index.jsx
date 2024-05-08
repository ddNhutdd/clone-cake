import { close, getShowChart } from 'src/redux/slices/swap.slices';
import Chart from '../chart';
import css from './chart-drawer.module.scss';
import Drawer from 'src/components/drawer';
import useMediaQuery, { widthDevice } from 'src/hooks/useMedia';
import { useDispatch, useSelector } from 'react-redux';

function ChartDrawer() {


	const dispatch = useDispatch();
	const showChart = useSelector(getShowChart);
	const screen = useMediaQuery();




	const isShowChartDrawer = showChart && (screen === widthDevice.width_576 ||
		screen === widthDevice.width_768 ||
		screen === widthDevice.width_992)
	const closeChartDrawer = () => {
		dispatch(close());
	}



	return (
			<Drawer
				open={isShowChartDrawer}
				setOpen={closeChartDrawer}
				screen={true}
				radiusBottom={false}
			>
				<div className={css.chartDrawer__chartContainer}>
					<Chart />
				</div>
			</Drawer>
	)
}

export default ChartDrawer;