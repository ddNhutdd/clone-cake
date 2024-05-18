import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import UserTemplate from '../templates/user/user.template';
import { url } from 'src/constants';

const Home = lazy(() => import('../pages/home'));
const Swap = lazy(() => import('../pages/swap'));
const Staking = lazy(() => import('../pages/staking'));
const CakeStaking = lazy(() => import('../pages/cake-staking'));
const Profile = lazy(() => import('../pages/profile'));
const Liquidity = lazy(() => import('../pages/liquidity'));
const LiquidityAdd = lazy(() => import('../pages/add-liquidity'));
const BuyCrypto = lazy(() => import('../pages/buy-crypto'));
const Twap = lazy(() => import('../pages/twap'));
const Limit = lazy(() => import('../pages/limit'));
const Info = lazy(() => import('../pages/info'));
const Ifo = lazy(() => import('../pages/ifo'));
const Affiliates = lazy(() => import('../pages/affiliates'));
const Pools = lazy(() => import('../pages/pools'));
const CakeStakers = lazy(() => import('../pages/cake-stakers'));
const TopTrader = lazy(() => import('../pages/top-trader'))

export const router = createBrowserRouter([
	{
		element: <UserTemplate />,
		children: [
			{
				path: url.home,
				element: (
					<Suspense>
						<Home />
					</Suspense>
				),
			},
			{
				path: url.swap,
				element: (
					<Suspense>
						<Swap />
					</Suspense>
				),
			},
			{
				path: url.staking,
				element: (
					<Suspense>
						<Staking />
					</Suspense>
				),
			},
			{
				path: url.cakeStaking,
				element: (
					<Suspense>
						<CakeStaking />
					</Suspense>
				),
			},
			{
				path: url.profile,
				element: (
					<Suspense>
						<Profile />
					</Suspense>
				),
			},
			{
				path: url.liquidity,
				element: (
					<Suspense>
						<Liquidity />
					</Suspense>
				),
			},
			{
				path: url.liquidityAdd,
				element: (
					<Suspense>
						<LiquidityAdd />
					</Suspense>
				),
			},
			{
				path: url.buyCrypto,
				element: (
					<Suspense>
						<BuyCrypto />
					</Suspense>
				),
			},
			{
				path: url.twap,
				element: (
					<Suspense>
						<Twap />
					</Suspense>
				),
			},
			{
				path: url.limit,
				element: (
					<Suspense>
						<Limit />
					</Suspense>
				),
			},
			{
				path: url.info,
				element: (
					<Suspense>
						<Info />
					</Suspense>
				),
			},
			{
				path: url.info_v3,
				element: (
					<Suspense>
						<Info />
					</Suspense>
				),
			},
			{
				path: url.info_stable_swap,
				element: (
					<Suspense>
						<Info />
					</Suspense>
				),
			},
			{
				path: url.ifo,
				element: (
					<Suspense>
						<Ifo />
					</Suspense>
				),
			},
			{
				path: url.affiliates,
				element: (
					<Suspense>
						<Affiliates />
					</Suspense>
				),
			},
			{
				path: url.pools,
				element: (
					<Suspense>
						<Pools />
					</Suspense>
				),
			},
			{
				path: url.tradingReward,
				element: (
					<Suspense>
						<CakeStakers />
					</Suspense>
				),
			},
			{
				path: url.topTraders,
				element: (
					<Suspense>
						<TopTrader />
					</Suspense>
				),
			}
		],
	},
]);
