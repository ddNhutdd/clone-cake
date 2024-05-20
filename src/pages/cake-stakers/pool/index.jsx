import Card, { cardType } from 'src/components/card';
import css from './pool.module.scss';
import Button from 'src/components/button';
import { useTheme } from 'src/context/dark-theme';

function Pool(props) {
	const {
		data,
		imageLeft,
		imageRight
	} = props;

	// render data
	const renderData = (list) => {
		return list?.map(([value1, value2]) => {
			return (
				<div key={value1} className={css.pool__cardContent__row}>
					<div>
						{value1}
					</div>
					<div>
						{value2}
						{
							list.at(-1).at(0) === value1 && <Button
								className={`${css[`pool--button`]} ${css.pool__inlineButton}`}
							>
								View Pairs
							</Button>
						}
					</div>
				</div>
			)
		})
	}

	// theme
	const { isDarkMode } = useTheme();
	const darkClass = isDarkMode ? css.dark : '';

	return (
		<div className={`${css.pool} ${darkClass}`}>
			<div className={css.container}>
				<Card
					type={cardType.flat}
					className={css.pool__card}
					classNameContent={css.pool__cardContent}
				>
					<div className={css.pool__cardContent__title}>
						Current Reward Pool
					</div>
					{
						renderData(data)
					}
					<div className={css.pool__cardContent__action}>
						<Button className={`${css[`pool--button`]}`}>
							View Pairs
						</Button>
					</div>
					{
						imageRight && <img src={imageRight} className={css.pool__face} alt="dk" />
					}
				</Card>
				<div className={css.pool__backgroundImge}>
					{imageLeft}
				</div>
			</div>
		</div >
	)
}

export default Pool