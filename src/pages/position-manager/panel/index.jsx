import Bottom from './bottom';
import css from './panel.module.scss';
import Top from './top';

function Panel() {
	return (
		<div className={css.panel}>
			<div className={css.container}>
				<Top />
				<Bottom />
			</div>
		</div>
	)
}

export default Panel