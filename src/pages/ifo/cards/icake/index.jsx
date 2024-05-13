import { ToolTip, tooltipPosition, tooltipTrigger } from 'src/components/tooltip';
import css from './icake.module.scss';
import { FaRegQuestionCircle } from "react-icons/fa";
import Warning from 'src/components/warning';
import { FaCircleInfo } from "react-icons/fa6";
import Button from 'src/components/button';
import { useTheme } from 'src/context/dark-theme';

function Icake() {
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.icake} ${darkClass}`}>
			<div className={css.icake__top}>
				<div className={css.icake__top__item}>
					<div className={css.icake__top__title}>
						My Cake
					</div>
					<div className={css.icake__top__value}>
						<span>
							0
						</span>
						<ToolTip
							trigger={tooltipTrigger.hover}
							content={`Your available iCAKE is calculated with the veCAKE balance at the snapshot time, multiplied by a fixed ratio.`}
							position={tooltipPosition.right}
							className={css.icake__top__value__tooltip}
						>
							<FaRegQuestionCircle />
						</ToolTip>
					</div>
				</div>
				<div className={css.icake__top__item}>
					<img
						src="src/assets/imgs/ifo-sales.webp"
						alt="ifo"
					/>
				</div>
			</div>
			<div className={css.icake__bot}>
				<div className={css.icake__bot__value}>
					<img
						src={`src/assets/imgs/token-vecake.webp`}
						alt="vecake"
					/>
					<div className={css.icake__bot__value__name}>
						veCAKE
					</div>
					<div className={css.icake__bot__value__value}>
						0
					</div>
				</div>
				<div className={css.icake__bot__radio}>
					<div>
						<ToolTip
							content="Your iCAKE is calculated by applying this ratio on the number of veCAKE at the snapshot time."
							position={tooltipPosition.right}
							className={css.icake__bot__radio__title}
						>
							Ratio
						</ToolTip>
					</div>
					<div className={css.icake__bot__radio__multiply}>
						1x
					</div>
				</div>
				<div className={css.icake__warning}>
					<Warning
						icon={
							<div className=''>
								<FaCircleInfo />
							</div>
						}
					>
						<p>
							You have no veCAKE at the snapshot time.
						</p>
						<p>
							To participate, lock CAKE to get veCAKE. Or extend your veCAKE position beyond the snapshot time.
						</p>
					</Warning>
				</div>
				<div className={css.icake__bot__action}>
					<Button >
						Go to CAKE staking
					</Button>
				</div>
			</div>
		</div >
	)
}

export default Icake