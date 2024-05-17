import { memo } from 'react';

function BaseIcon() {
	return (
		<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="18px" mr="0.5em" color="text" className="sc-df97f1b-0 kMCfZq"><path fill="white" fillRule="evenodd" clipRule="evenodd" d="M10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" /><path fill="white" fillRule="evenodd" clipRule="evenodd" d="M11.875 10.625H0V9.375H11.875V10.625Z" /></svg>
	);
}

export default memo(BaseIcon);
