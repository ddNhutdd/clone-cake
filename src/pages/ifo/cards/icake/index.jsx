import { ToolTip, tooltipPosition, tooltipTrigger } from 'src/components/tooltip';
import css from './icake.module.scss';
import { FaRegQuestionCircle } from "react-icons/fa";

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
							content={`dsafdsafdsa`}
							position={tooltipPosition.right}
							show={true}
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
		</div >
	)
}

export default Icake