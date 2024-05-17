import { ToolTip, tooltipPosition, tooltipTrigger } from 'src/components/tooltip';
import css from './value-content.module.scss';
import ArrowSquareIcon from 'icons/arrow-square.icon';
import { NavLink } from 'react-router-dom';
import CountUp from 'src/components/count-up';
import { useTheme } from 'src/context/dark-theme';

function ValueContent() {
	//theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.valueContent} ${darkClass}`}>
			<div className={css.valueContent__rowTwoSide}>
				<div>
					<ToolTip
						position={tooltipPosition.bottom}
						content={`Total amount of CAKE staked in this pool`}
						className={css.valueContent__toolTipRoot}
						trigger={tooltipTrigger.runtime}
						show={false}
					>
						Total staked:
					</ToolTip>
				</div>
				<div>
					<CountUp
						endValue={64042986}
						decimals={0}
					/>
					{" "}
					CAKE
				</div>
			</div>
			<div className={css.valueContent__rowTwoSide}>
				<div>
					Total locked:
				</div>
				<div>
					<CountUp
						endValue={57475463}
						decimals={0}
					/>
					{" "}
					CAKE
				</div>
			</div>
			<div className={css.valueContent__rowTwoSide}>
				<div>
					<ToolTip
						position={tooltipPosition.bottom}
						content={`The average lock duration of all the locked staking positions of other users`}
						className={css.valueContent__toolTipRoot}
						trigger={tooltipTrigger.runtime}
						show={false}
					>
						Advange lock duration
					</ToolTip>
				</div>
				<div>
					<CountUp
						endValue={64042986}
						decimals={0}
					/>
					{" "}
					CAKE
				</div>
			</div>
			<div className={css.valueContent__rowOneSide}>
				<NavLink>
					See Token Info
					<ArrowSquareIcon />
				</NavLink>
			</div>
			<div className={css.valueContent__rowOneSide}>
				<NavLink>
					View Tutorial
					<ArrowSquareIcon />
				</NavLink>
			</div>
			<div className={css.valueContent__rowOneSide}>
				<NavLink>
					View Contract
					<ArrowSquareIcon />
				</NavLink>
			</div>
		</div>
	)
}

export default ValueContent