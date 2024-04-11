import React from 'react';
import PropTypes from 'prop-types';
import css from './pill.module.scss';

function Pill(props) {
	const {children} = props;
	return <div className={css.pill}>{children}</div>;
}

Pill.propTypes = {
	children: PropTypes.node,
};

export default Pill;
