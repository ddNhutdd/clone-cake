import React, { useState } from 'react';

const LazyLoadImage = (props) => {
	const { smallImageUrl, largeImageUrl } = props;
	const [imageLoaded, setImageLoaded] = useState(false);

	// Hàm được gọi khi hình ảnh lớn đã tải xong
	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	return (
		<div>
			{/* Hiển thị hình ảnh nhỏ */}
			{!imageLoaded && <img src={smallImageUrl} alt="Thumbnail" />}

			{/* Hiển thị hình ảnh lớn khi đã tải xong */}
			{imageLoaded && <img src={largeImageUrl} alt="Large Image" onLoad={handleImageLoad} />}
		</div>
	);
};

export default LazyLoadImage;