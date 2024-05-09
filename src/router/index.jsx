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
			}
		],
	},
]);
