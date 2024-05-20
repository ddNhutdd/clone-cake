import ArrowSquareIcon from 'src/assets/icons/arrow-square.icon';
import css from './top.module.scss';
import Button, { buttonClassesType } from 'src/components/button';

function Top() {
	return (
		<div className={css.top}>
			<div className={css.top__left}>
				<div className={css.top__header}>
					Migrate for new bCAKE
				</div>
				<div className={css.top__text}>
					Migrate your V2, StableSwap or Position Manager staking to continue earning and boost your earning with veCAKE!
				</div>
				<div className={css.top__action}>
					<Button>
						Process
						<ArrowSquareIcon />
					</Button>
					<Button
						type={buttonClassesType.primaryWhite}
					>
						Guide
						<ArrowSquareIcon />
					</Button>
				</div>
			</div>
			<div className={css.top__right}>
				<div className={css.top__right__imageContiner} />
			</div>
		</div>
	)
}

export default Top