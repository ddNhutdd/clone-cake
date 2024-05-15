import { ToolTip, tooltipPosition, tooltipTrigger } from 'src/components/tooltip';
import css from './mobile-content.module.scss';
import ArrowSquareIcon from 'icons/arrow-square.icon';
import { NavLink } from 'react-router-dom';

function MobileContent() {
	return (
		<div className={css.mobileContent}>
			<div className={css.mobileContent__rowTwoSide}>
				<div>
					<ToolTip
						position={tooltipPosition.bottom}
						content={`Total amount of CAKE staked in this pool`}
						className={css.mobileContent__toolTipRoot}
						trigger={tooltipTrigger.runtime}
						show={false}
					>
						Total staked:
					</ToolTip>
				</div>
				<div>
					64,042,986 CAKE
				</div>
			</div>
			<div className={css.mobileContent__rowTwoSide}>
				<div>
					Total locked:
				</div>
				<div>
					57,475,463 CAKE
				</div>
			</div>
			<div className={css.mobileContent__rowTwoSide}>
				<div>
					<ToolTip
						position={tooltipPosition.bottom}
						content={`The average lock duration of all the locked staking positions of other users`}
						className={css.mobileContent__toolTipRoot}
						trigger={tooltipTrigger.runtime}
						show={false}
					>
						Advange lock duration
					</ToolTip>
				</div>
				<div>
					64,042,986 CAKE
				</div>
			</div>
			<div className={css.mobileContent__rowOneSide}>
				<NavLink>
					See Token Info
					<ArrowSquareIcon />
				</NavLink>
			</div>
			<div className={css.mobileContent__rowOneSide}>
				<NavLink>
					View Tutorial
					<ArrowSquareIcon />
				</NavLink>
			</div>
			<div className={css.mobileContent__rowOneSide}>
				<NavLink>
					View Contract
					<ArrowSquareIcon />
				</NavLink>
			</div>
		</div>
	)
}

export default MobileContent