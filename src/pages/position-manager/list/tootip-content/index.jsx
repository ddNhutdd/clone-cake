import css from './tootip-content.module.scss';

function TootipContent() {
	return (
		<div className={css.tootipContent}>
			<div>
				Combined APR:
				{" "}
				<span className={css[`tootipContent--bold`]}>
					360.90%
				</span>
			</div>
			<ul>
				<li>
					CAKE APR:
					{" "}
					<span className={css[`tootipContent--bolder`]}>
						343.65%
					</span>
					{" "}
					<span className={`${css[`tootipContent--bolder`]} ${css[`tootipContent--line-through`]}`}>
						114.55%
					</span>
				</li>
				<li>
					LP APR:
					{" "}
					<span className={css[`tootipContent--bold`]}>
						17.25%
					</span>
				</li>
			</ul>
			<div className={css.tootipContent__params}>
				bCAKE only boosts token incentive (often CAKE) APR. Actual multiplier is subject to position manager and veCAKE pool condition.
			</div>
			<div>
				Calculated based average data since vault inception.
			</div>
		</div>
	)
}

export default TootipContent