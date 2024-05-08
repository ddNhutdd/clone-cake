import { useState, useEffect } from 'react';
import { apiStatus } from 'src/constants';

const useAsync = (asyncFn, ...params) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [status, setStatus] = useState(apiStatus.pending);
	const isFirst = useRef(false);

	const fetchData = async (...params) => {
		try {
			if (status === apiStatus.fetching) {
				return;
			} else {
				setStatus(apiStatus.fetching);
			}
			const result = await asyncFn(...params);
			setData(result);
			setStatus(apiStatus.fulfilled);
		} catch (err) {
			setError(err);
			setStatus(apiStatus.rejected);
		}
	};

	if (!isFirst.current) {
		isFirst.current = true;
		fetchData(...params);
	}

	const run = (...newParams) => {
		fetchData(...newParams);
	};

	return { data, error, status, run };
};

export default useAsync;
