import DropdownHeader2, { dropdownItemAlignType } from 'src/components/dropdown-header-2';
import css from './header-chain.module.scss';
import Button, { buttonClassesType } from 'src/components/button';
import { FaChevronDown } from 'react-icons/fa';

function ChainSelector() {
	const listChain = [
		{
			id: 1,
			content: 'العربية',
			borderBottom: true,
		},
		{
			id: 2,
			content: 'বাংলা',
			image: 'src/assets/imgs/arbitrumicon.png',
		},
		{
			id: 3,
			content: 'English',
			image: 'src/assets/imgs/arbitrumicon.png',
		},
		{
			id: 4,
			content: 'Deutsch',
			image: 'src/assets/imgs/arbitrumicon.png',
		},
		{
			id: 5,
			content: 'Ελληνικά',
			image: 'src/assets/imgs/arbitrumicon.png',
		},
		{
			id: 6,
			content: 'Español',
			image: 'src/assets/imgs/arbitrumicon.png',
		},
		{
			id: 7,
			content: 'Suomalainen',
			image: 'src/assets/imgs/arbitrumicon.png',
		},
	];


	return (
		<DropdownHeader2
			positionMenu={{
				top: '26px',
				right: '-55px',
				paddingTop: '18px',
			}}
			dropdownItemAlign={dropdownItemAlignType.left}
			header={
				<>
					<div
						className={`${css['chainSelector__chainImage']}`}
					>
						<img src='src/assets/imgs/polygonicon.png' />
					</div>
					<Button
						style={{ paddingLeft: 35 }}
						type={buttonClassesType.secondThin}
					>
						<span
							className={`${css.chainSelector__buttonText}`}
						>
							BNB Chain
						</span>
						<span style={{ fontSize: '1.2rem' }}>
							<FaChevronDown />
						</span>
					</Button>
				</>
			}
			list={listChain}
		/>
	)
}

export default ChainSelector