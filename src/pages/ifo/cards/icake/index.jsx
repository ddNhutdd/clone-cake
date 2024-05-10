import { ToolTip, tooltipPosition, tooltipTrigger } from 'src/components/tooltip';
import css from './icake.module.scss';
import { FaRegQuestionCircle } from "react-icons/fa";
import Warning from 'src/components/warning';
import { FaCircleInfo } from "react-icons/fa6";
import Button from 'src/components/button';

function Icake() {
	return (
		<div className={css.icake}>
			<div className={css.icake__top}>
				<div className={css.icake__top__item}>
					<div className={css.icake__top__title}>
						My Cake
					</div>
					<div className={css.icake__top__value}>
						0
						<ToolTip
							trigger={tooltipTrigger.runtime}
							content={`Your available iCAKE is calculated with the veCAKE balance at the snapshot time, multiplied by a fixed ratio.`}
							position={tooltipPosition.right}
							show={false}
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
					<img src={`src/assets/imgs/token-vecake.webp`} alt="vecake" />
					<div>veCAKE</div>
					<div>0</div>
				</div>
				<div className={css.icake__bot__radio}>
					<div>Ratio</div>
					<div>1x</div>
				</div>
				<div>
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
					<Button>
						Go to CAKE staking
					</Button>
				</div>
			</div>
		</div >
	)
}

export default Icake