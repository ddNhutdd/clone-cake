import { defaultConfig } from '@web3modal/ethers/react';

export const url = {
	home: '/',
	swap: '/swap',
	staking: '/staking',
	cakeStaking: '/cake-staking',
	profile: '/profile',
	liquidity: '/liquidity',
	liquidityAdd: '/liquidity-add',
	buyCrypto: '/buy-crypto',
	twap: '/twap',
	limit: '/limit',
	info: '/info',
	info_v3: '/info/v3',
	info_stable_swap: '/info/stable-swap',
	ifo: '/ifo',
	affiliates: '/affiliates',
	pools: '/pools',
	tradingReward: '/cake-stakers',
	topTraders: '/top-traders',
	positionManager: '/position-manager',
	bridge: '/bridge',
	option: '/option'
};

export const localStorageVariable = {
	darkTheme: 'darkTheme',
};

export const chainList = [
	{
		blockChain: 'Ethereum Mainnet',
		ChainID: '1',
		Currency: 'ETH',
	},
	{
		blockChain: 'BNB Smart Chain Mainnet',
		ChainID: '56',
		Currency: 'BNB',
	},
];

// config web3
export const projectId = '5cfce0ac0d25591fa3ce98011db61342';
export const mainnet = {
	chainId: 1,
	name: 'Ethereum',
	currency: 'ETH',
	explorerUrl: 'https://etherscan.io',
	rpcUrl: 'https://cloudflare-eth.com',
};
const metadata = {
	name: 'My Website',
	description: 'My Website description',
	url: 'https://mywebsite.com',
	icons: ['https://avatars.mywebsite.com/'],
};
export const ethersConfig = defaultConfig({
	/*Required*/
	metadata,

	/*Optional*/
	enableEIP6963: true,
	enableInjected: true,
	enableCoinbase: true,
	rpcUrl: '...',
	defaultChainId: 1,
});

// string
export const commonString = {
	success: 'Success',
	tooLong: 'Too long',
	tooShort: 'Too short',
	require: 'Require',
	formatInvalid: 'Format invalid',
	emailNotMatch: 'Email not match',
	passwordNotMatch: 'Password not match',
};

export const regular = {
	email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
};

export const dateFormat = `d-M-yyyy`;

export const apiStatus = {
	pending: 'pending',
	fetching: 'fetching',
	fulfilled: 'fulfilled',
	rejected: 'rejected'
}

export const sortType = {
	asc: 'acscending',
	des: 'descending'
}

export const showType = {
	list: 'list',
	grid: 'grid'
}
