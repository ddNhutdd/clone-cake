import css from './linea-pill.module.scss';
import LineaIcon from 'src/assets/icons/linea.icon';

function LineaPill() {
	return (
		<div className={css.lineaPill}>
			<LineaIcon />
			Linea
		</div>
	)
}

export default LineaPill