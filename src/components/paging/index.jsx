import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import css from './paging.module.scss';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export const Paging = (props) => {
	const {
		currentPage,
		pageSize = 10,
		totalItems,
		onChange
	} = props;

	const totalPage = Math.ceil(totalItems / pageSize);
	const [prevDisable, setPrevDisable] = useState(currentPage <= 1);
	const [nextDisable, setNextDisable] = useState(currentPage > totalPage);

	const preClickHandle = (currentPage) => {
		const newPage = currentPage - 1;
		if (newPage <= 0) {
			return;
		}
		onChange(newPage)
	}

	const nextClickHandle = (currentPage) => {
		const newPage = currentPage + 1;
		if (newPage > totalPage) {
			return;
		}
		onChange(newPage)
	}

	const renderClassDisable = (isDisable) => {
		return isDisable ? css.disable : '';
	}
	const setDisable = () => {
		if (currentPage <= 1) {
			setPrevDisable(true);
		} else if (currentPage > 1) {
			setPrevDisable(false);
		}

		if (currentPage >= totalPage) {
			setNextDisable(true);
		} else if (currentPage < totalPage) {
			setNextDisable(false)
		}
	}

	useEffect(() => {
		setDisable();
	}, [currentPage])

	return (
		<div className={css.paging}>
			<div onClick={preClickHandle.bind(null, currentPage)} className={`${css.paging__button} ${renderClassDisable(prevDisable)}`}>
				<FaArrowLeft />
			</div>
			<div>
				Page {currentPage} of {totalPage}
			</div>
			<div onClick={nextClickHandle.bind(null, currentPage)} className={`${css.paging__button} ${renderClassDisable(nextDisable)}`}>
				<FaArrowRight />
			</div>
		</div>
	)
}

Paging.propTypes = {
	second: PropTypes.third
}