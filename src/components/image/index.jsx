import React, { useState } from 'react';

const Image = (props) => {
	const {
		smallImageUrl,
		largeImageUrl,
		alt
	} = props;
	const [imageLoaded, setImageLoaded] = useState(false);

	// Hàm được gọi khi hình ảnh lớn đã tải xong
	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	return (
		<div>
			{/* Hiển thị hình ảnh nhỏ */}
			{!imageLoaded && <img src={smallImageUrl} alt={alt} />}

			{/* Hiển thị hình ảnh lớn khi đã tải xong */}
			{imageLoaded && <img src={largeImageUrl} alt={alt} onLoad={handleImageLoad} />}
		</div>
	);
};

export default Image;