import React from 'react';
import Button, { buttonClassesType } from 'src/components/button';
import css from './v2-content.module.scss';

function V2Content() {
	return (
		<div className={css.v2Content}>
			<div className={css.v2Content__title}>
				Don't see a pair you joined?
			</div>
			<div>
				<Button type={buttonClassesType.primaryThinOutline}>
					Find other LP tokens
				</Button>
			</div>
			<div className={css.v2Content__lastButton}>
				<Button type={buttonClassesType.primaryThinOutline}>
					Migrate to V3
				</Button>
			</div>
		</div>
	)
}

export default V2Content