import Input3 from 'src/components/input-3';
import css from './tokens.module.scss';

function Tokens() {
	return (
		<div className={css.tokens}>
			<Input3 placeholder='0x00000' style={{ height: 48, marginBottom: 20 }} />
			<div className={css.tokens__text}>0 Imported Tokens</div>
		</div>
	)
}

export default Tokens