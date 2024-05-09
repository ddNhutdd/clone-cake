import React, { useState, useEffect } from 'react';

const LazyLoadBackgroundImage = (props) => {
	const {
		smallImageUrl,
		largeImageUrl,
		className,
		children
	} = props;
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const largeImage = new Image();
		largeImage.src = largeImageUrl;
		largeImage.onload = () => {
			setImageLoaded(true);
		};
	}, [largeImageUrl]);

	const style = {
		backgroundImage: `url(${imageLoaded ? largeImageUrl : smallImageUrl})`,
	};

	return (
		<div className={className} style={style}>
			{children}
		</div>
	);
};

export default LazyLoadBackgroundImage;
