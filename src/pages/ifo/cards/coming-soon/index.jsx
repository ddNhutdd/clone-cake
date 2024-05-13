import Card, { cardType } from 'src/components/card';
import css from './coming-soon.module.scss';
import { ToolTip, tooltipPosition } from 'src/components/tooltip';
import { FaRegQuestionCircle } from "react-icons/fa";
import PancakeGrowIcon from 'src/assets/icons/pancake-grow.icon';
import PancakeGrowDarkIcon from 'src/assets/icons/pancake-grow-dark.icon';
import PancakeUnknowIcon from 'src/assets/icons/pancake-unknow.icon';
import PancakeUnknowDarkIcon from 'src/assets/icons/pancake-unknow-dark.icon';
import { useTheme } from 'src/context/dark-theme';

function ComingSoon() {
	//theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.comingSoon} ${darkClass}`}>
			<Card
				type={cardType.flat}
			>
				<div className={css.comingSoon__content}>
					<div className={css.comingSoon__panel}>
					</div>
					<div className={css.comingSoon__cards}>
						<Card
							type={cardType.flat}
							className={css.comingSoon__card}
						>
							<div className={`${css.comingSoon__cards__header} ${css.left}`}>
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
								{
									isDarkMode ? <PancakeGrowDarkIcon /> : <PancakeGrowIcon />
								}
								<div className={css.comingSoon__cards__body__text}>
									Follow our social channels to learn more about the next IFO.
								</div>
							</div>
						</Card>
						<Card
							type={cardType.flat}
							className={css.comingSoon__card}
						>
							<div className={`${css.comingSoon__cards__header} ${css.right}`}>
								<div className={css.comingSoon__cards__header__title}>
									Private Sale
								</div>
								<div className={css.comingSoon__cards__header__info}>
									<FaRegQuestionCircle />
								</div>
							</div>
							<div className={css.comingSoon__cards__body}>
								{
									isDarkMode ? <PancakeUnknowDarkIcon /> : <PancakeUnknowIcon />
								}
								<div className={css.comingSoon__cards__body__text}>
									Follow our social channels to learn more about the next IFO.
								</div>
							</div>
						</Card>
					</div>
				</div>
			</Card>
		</div>
	)
}

export default ComingSoon