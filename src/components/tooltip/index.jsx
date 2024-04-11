import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import css from './tooltip.module.scss';
import ReactDOMServer from 'react-dom/server';

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
	} = props;

	const container = useRef(null);
	const tooltipElement = useRef(null);
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

		newElement.innerHTML =
			typeof content === 'object' ?
				ReactDOMServer.renderToString(content)
				: content;
		document.body.appendChild(newElement);
		newElement.style.position = 'fixed';

		let tooltipTop = 0;
		let tooltipLeft = 0;
		const containerInfo = container.current.getBoundingClientRect();
		const tooltipInfo = tooltipElement.current.getBoundingClientRect();
		switch (position) {
			case tooltipPosition.top:
				newElement.classList.add(css.top);
				tooltipTop =
					containerInfo.top - tooltipInfo.height - space.current;
				tooltipLeft =
					containerInfo.left +
					(containerInfo.width - tooltipInfo.width) / 2;
				newElement.style.top = tooltipTop + 'px';
				newElement.style.left = tooltipLeft + 'px';
				break;
			case tooltipPosition.left:
				newElement.classList.add(css.left);
				tooltipTop =
					containerInfo.top +
					(containerInfo.height - tooltipInfo.height) / 2;
				tooltipLeft =
					containerInfo.left - tooltipInfo.width - space.current;
				newElement.style.top = tooltipTop + 'px';
				newElement.style.left = tooltipLeft + 'px';
				break;
			case tooltipPosition.bottom:
				newElement.classList.add(css.bottom);
				tooltipTop =
					containerInfo.top + containerInfo.height + space.current;
				tooltipLeft =
					containerInfo.left +
					(containerInfo.width - tooltipInfo.width) / 2;
				newElement.style.top = tooltipTop + 'px';
				newElement.style.left = tooltipLeft + 'px';
				break;
			case tooltipPosition.right:
				newElement.classList.add(css.right);
				tooltipTop =
					containerInfo.top +
					(containerInfo.height - tooltipInfo.height) / 2;
				tooltipLeft =
					containerInfo.left + containerInfo.width + space.current;
				newElement.style.top = tooltipTop + 'px';
				newElement.style.left = tooltipLeft + 'px';
				break;
			default:
				break;
		}
		newElement.style.zIndex = '999999';
	};
	const removeTooltip = () => {
		if (!tooltipElement || !tooltipElement.current) return;
		document.body.removeChild(tooltipElement.current);
		tooltipElement.current = null;
	};

	useEffect(() => {
		if (!container || !container.current) return;

		switch (trigger) {
			case tooltipTrigger.hover:
				container.current.addEventListener('mouseenter', addTooltip);
				container.current.addEventListener('mouseleave', removeTooltip);
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

		document.addEventListener('scroll', removeTooltip)

		return () => {
			document.removeEventListener('scroll', removeTooltip)
			removeTooltip();
		};
	}, [trigger, children, content, position, show]);

	return (
		<div ref={container} className={`${css.tooltipContainer} ${className}`}>
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
