export const setLocalStorage = (key, data) => {
	try {
		localStorage.setItem(key, JSON.stringify(data));
	} catch (error) { }
};

export const getLocalStorage = (key) => {
	try {
		return JSON.parse(localStorage.getItem(key));
	} catch (error) { }
};

export const removeLocalStorage = (key) => {
	try {
		localStorage.removeItem(key);
	} catch (error) { }
};

export const debounce = function (func, ms) {
	let timeout;
	return function (...args) {
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(this, args), ms);
	};
};

export const createIntersectionObserve = (htmlElement, animationClass) => {
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.2,
	};
	const callback = function (entries) {
		for (const entry of entries) {
			const element = entry.target;
			if (!entry.isIntersecting) return;
			else
				!element.classList.contains(animationClass) &&
					element.classList.add(animationClass);
		}
	};

	const observer = new IntersectionObserver(callback, options);
	const element = document.getElementById(htmlElement);
	observer.observe(element);
	return observer;
};
export const addAnimation = (listId, listAnimation) => {
	const listObserse = [];
	for (let i = 0; i < listId.length; i++) {
		const temp = createIntersectionObserve(
			listId.at(i),
			listAnimation.at(i),
		);
		listObserse.push(temp);
	}
	return listObserse;
};

export const truncatedWalletAddress = (address) => {
	try {
		const last4Chars = address.slice(-4);
		return `0x...${last4Chars}`;
	} catch (error) {
		return `0x...`;
	}
};

export const scrollToTop = () => {
	document.documentElement.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
};

export const countCharacterOccurrences = (str, char) => {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === char) {
			count++;
		}
	}
	return count;
};

export const generateString = (char, numChars) => {
	let result = '';
	for (let i = 0; i < numChars; i++) {
		result += char;
	}
	return result;
};

export const formatDay = (format, value) => {
	const day = value.getDate();
	const month = value.getMonth() + 1;
	const year = value.getFullYear();

	const countNumberDay = countCharacterOccurrences(format, 'd');
	const dayString = day.toString().padStart(countNumberDay, '0');

	const countNumberMonth = countCharacterOccurrences(format, 'M');
	const monthString = month.toString().padStart(countNumberMonth, '0');

	const countNumberYear = countCharacterOccurrences(format, 'y');
	const yearString = year.toString().padStart(countNumberYear, '0');

	const result = format
		.replace(generateString('d', countNumberDay), dayString)
		.replace(generateString('M', countNumberMonth), monthString)
		.replace(generateString('y', countNumberYear), yearString);
	return result;
};

export const hasKey = (obj, key) => {
	if (!obj || !key) return false;
	const keys = Object.keys(obj);
	return keys.includes(key);
};

export const shortenHash = (inputString) => {
	if (!inputString || inputString.length < 9) {
		return inputString;
	}

	const firstFourChars = inputString.substring(0, 4);

	const lastFourChars = inputString.substring(inputString.length - 4);

	const shortenedString = `${firstFourChars}...${lastFourChars}`;

	return shortenedString;
}


export const generateUniqueUUID = () => {
	const timestamp = Date.now(); // Get the current timestamp in milliseconds
	const randomBytes = new Uint8Array(8); // Create an empty Uint8Array for random bytes
	window.crypto.getRandomValues(randomBytes); // Generate random bytes using crypto.getRandomValues

	// Convert random bytes to hexadecimal string
	const randomString = Array.from(randomBytes)
		.map(byte => byte.toString(16).padStart(2, '0'))
		.join('');

	// Combine timestamp and random string into a UUID-like format
	const uuid = `${timestamp}-${randomString}`;

	return uuid;
}
