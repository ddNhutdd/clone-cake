import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ToolTip, tooltipPosition, tooltipTrigger} from '../tooltip';
import {MdOutlineContentCopy} from 'react-icons/md';
import CopyToClipboard from 'react-copy-to-clipboard';
import css from './copy-button.module.scss';

function CopyButton(props) {
	const {contentCopy, tooltipPosition} = props;

	const onCopyHandle = () => {
		setShowTooltip(true);

		const idTimeout = setTimeout(() => {
			setShowTooltip(false);
			clearTimeout(idTimeout);
		}, 600);
	};

	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<div className={css.copyButton}>
			<ToolTip
				trigger={tooltipTrigger.runtime}
				content={`Token Address Copied`}
				position={tooltipPosition}
				show={showTooltip}
			>
				<CopyToClipboard
					text={contentCopy || 'undefine'}
					onCopy={onCopyHandle}
				>
					<MdOutlineContentCopy />
				</CopyToClipboard>
			</ToolTip>
		</div>
	);
}

CopyButton.propTypes = {
	contentCopy: PropTypes.string,
	tooltipPosition: PropTypes.oneOf(Object.values(tooltipPosition)),
};

export default CopyButton;
