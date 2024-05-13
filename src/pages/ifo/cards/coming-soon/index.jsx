import Card, { cardType } from 'src/components/card';
import css from './coming-soon.module.scss';
import { ToolTip, tooltipPosition } from 'src/components/tooltip';
import { FaRegQuestionCircle } from "react-icons/fa";
import PancakeGrowIcon from 'src/assets/icons/pancake-grow.icon';
import PancakeUnknowIcon from 'src/assets/icons/pancake-unknow.icon';

function ComingSoon() {
	return (
		<div className={css.comingSoon}>
			<Card
				type={cardType.flat}
			>
				<div className={css.comingSoon__panel}>
					panel
				</div>
				<div className={css.comingSoon__cards}>
					<Card
						type={cardType.flat}
					>
						<div className={css.comingSoon__cards__header}>
							<div className={css.comingSoon__cards__header__title}>
								Public Sale
							</div>
							<div className={css.comingSoon__cards__header__info}>
								<ToolTip
									content="No limits on the amount you can commit. Additional fee applies when claiming."
									position={tooltipPosition.bottom}
								>
									<FaRegQuestionCircle />
								</ToolTip>
							</div>
						</div>
						<div className={css.comingSoon__cards__body}>
							<PancakeGrowIcon />
							<div className={css.comingSoon__cards__body__text}>
								Follow our social channels to learn more about the next IFO.
							</div>
						</div>
					</Card>
					<Card
						type={cardType.flat}
					>
						<div className={css.comingSoon__cards__header}>
							<div className={css.comingSoon__cards__header__title}>
								Private Sale
							</div>
							<div className={css.comingSoon__cards__header__info}>
								<FaRegQuestionCircle />
							</div>
						</div>
						<div className={css.comingSoon__cards__body}>
							<PancakeUnknowIcon />
							<div className={css.comingSoon__cards__body__text}>
								Follow our social channels to learn more about the next IFO.
							</div>
						</div>
					</Card>
				</div>
			</Card>
		</div>
	)
}

export default ComingSoon