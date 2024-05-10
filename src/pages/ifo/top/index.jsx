import useMediaQuery, { widthDevice } from 'src/hooks/useMedia';
import css from './top.module.scss';
import Button, { buttonClassesType } from 'src/components/button';
import { useState } from 'react';

function Top() {


	// responsive button
	const [largeButton, setLargeButton] = useState(buttonClassesType.primaryPuple);
	const screen = useMediaQuery();
	if (screen === widthDevice.width_576) {
		if (largeButton !== buttonClassesType.secondThin) {
			setLargeButton(buttonClassesType.secondThin)
		}
	} else {
		if (largeButton !== buttonClassesType.primaryPuple) {
			setLargeButton(buttonClassesType.primaryPuple)
		}
	}



	return (
		<div className={css.top}>
			<div className={css.container}>
				<div className={css.top__content}>
					<div className={css.top__content__item}>
						<div className={css.top__title}>
							IFO: Initial Farm Offerings
						</div>
						<div className={css.top__small}>
							Buy new tokens launching on BNB Smart Chain
						</div>
					</div>
					<div className={css.top__content__item}>
						<Button
							type={largeButton}
						>
							How does it work?
						</Button>
					</div>
				</div>
			</div>
			<img
				src={'/src/assets/imgs/bsc.webp'}
				alt={`bsc`}
			/>
		</div>
	)
}

export default Top