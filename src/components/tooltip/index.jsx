import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import css from './tooltip.module.scss';
import ReactDOMServer from 'react-dom/server';
import { useTheme } from 'src/context/dark-theme';

export const tooltipTrigger = {
	hover: 'hover',
	runtime: 'runtime',
};

export const tooltipPosition = {
	top: 'top',
	left: 'left',
	right: 'right',
	bottom: 'bottom',
};

export const ToolTip = (props) => {
	const {
		trigger,
		children,
		content,
		position,
		show,
		className,
		classNameTooltip,
		onClick
	} = props;

	const { isDarkMode } = useTheme();

	const container = useRef(null);
	const tooltipElement = useRef(null);
	const isHoverToolTipElement = useRef(false);
	const isHoverContainer = useRef(false);
	const space = useRef(10);

	const addTooltip = () => {
		if (tooltipElement && tooltipElement.current) {
			removeTooltip();
		}
		const newElement = document.createElement('div');
		tooltipElement.current = newElement;
		newElement.classList.add(classNameTooltip);
		newElement.classList.add(css.tooltip);
		newElement.classList.add(css.fadeIn);
		newElement.classList.add(renderDarkTheme());

		newElement.innerHTML =
			typeof content === 'object' ?
				ReactDOMServer.renderToString(content)
				: content;
		document.body.appendChild(newElement);
		newElement.style.position = 'fixed';

		switch (position) {
			case tooltipPosition.top:
				newElement.classList.add(css.top);
				break;
			case tooltipPosition.left:
				newElement.classList.add(css.left);
				break;
			case tooltipPosition.bottom:
				newElement.classList.add(css.bottom);
				break;
			case tooltipPosition.right:
				newElement.classList.add(css.right);
				break;
			default:
				break;
		}
		calcPosition(newElement)
		newElement.style.zIndex = '999999';

		// thêm sự khiện cho tooltip chỉ xảy ra khi trigger là hover 
		if (trigger === tooltipTrigger.hover) {
			newElement.addEventListener('mouseenter', () => {
				isHoverToolTipElement.current = true;
			})
			newElement.addEventListener('mouseleave', () => {
				isHoverToolTipElement.current = false;
				const idTimeount = setTimeout(() => {
					if (!isHoverContainer.current) {
						removeTooltip();
					}
					clearTimeout(idTimeount);
				}, 100);
			})
		}
	};
	const removeTooltip = () => {
		if (!tooltipElement || !tooltipElement.current) return;
		document.body.removeChild(tooltipElement.current);
		tooltipElement.current = null;
		isHoverToolTipElement.current = false;
	};
	const renderDarkTheme = () => {
		return isDarkMode ? css.dark : css.light;
	}

	const calcPosition = (element) => {
		let tooltipTop = 0;
		let tooltipLeft = 0;
		const containerInfo = container.current.getBoundingClientRect();
		const tooltipInfo = tooltipElement.current.getBoundingClientRect();
		switch (position) {
			case tooltipPosition.top:
				tooltipTop =
					containerInfo.top - tooltipInfo.height - space.current;
				tooltipLeft =
					containerInfo.left +
					(containerInfo.width - tooltipInfo.width) / 2;
				element.style.top = tooltipTop + 'px';
				element.style.left = tooltipLeft + 'px';
				break;
			case tooltipPosition.left:
				tooltipTop =
					containerInfo.top +
					(containerInfo.height - tooltipInfo.height) / 2;
				tooltipLeft =
					containerInfo.left - tooltipInfo.width - space.current;
				element.style.top = tooltipTop + 'px';
				element.style.left = tooltipLeft + 'px';
				break;
			case tooltipPosition.bottom:
				tooltipTop =
					containerInfo.top + containerInfo.height + space.current;
				tooltipLeft =
					containerInfo.left +
					(containerInfo.width - tooltipInfo.width) / 2;
				element.style.top = tooltipTop + 'px';
				element.style.left = tooltipLeft + 'px';
				break;
			case tooltipPosition.right:
				tooltipTop =
					containerInfo.top +
					(containerInfo.height - tooltipInfo.height) / 2;
				tooltipLeft =
					containerInfo.left + containerInfo.width + space.current;
				element.style.top = tooltipTop + 'px';
				element.style.left = tooltipLeft + 'px';
				break;
			default:
				break;
		}
	}

	const scrollHandle = () => {
		switch (trigger) {
			case tooltipTrigger.hover:
				removeTooltip();
				break;

			case tooltipTrigger.runtime:
				calcPosition(tooltipElement.current);
				break;

			default:
				break;
		}
	}

	const containerMouseEnterHandle = () => {
		isHoverContainer.current = true;
		if (!tooltipElement.current) {
			addTooltip();
		}
	}

	useEffect(() => {
		if (!container || !container.current) return;

		switch (trigger) {
			case tooltipTrigger.hover:
				container.current.addEventListener('mouseenter', containerMouseEnterHandle);
				container.current.addEventListener('mouseleave', () => {
					isHoverContainer.current = false;
					const idTimeout = setTimeout(() => {
						if (!isHoverToolTipElement.current) {
							removeTooltip();
						}
						clearTimeout(idTimeout);
					}, 100);
				});
				break;
			case tooltipTrigger.runtime:
				if (show) {
					addTooltip();
				} else {
					removeTooltip();
				}
				break;
			default:
				break;
		}

		document.addEventListener('scroll', scrollHandle);

		return () => {
			document.removeEventListener('scroll', removeTooltip);
			removeTooltip();
		};
	}, [trigger, children, content, position, show]);

	return (
		<div
			ref={container}
			onClick={onClick}
			className={`${css.tooltipContainer} ${className}`}
		>
			{children}
		</div>
	);
};

ToolTip.propTypes = {
	trigger: PropTypes.oneOf(Object.values(tooltipTrigger)),
	children: PropTypes.node,
	content: PropTypes.node,
	position: PropTypes.oneOf(Object.values(tooltipPosition)),
	show: PropTypes.bool,
	className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	classNameTooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

ToolTip.defaultProps = {
	trigger: tooltipTrigger.hover,
	position: tooltipPosition.top,
};