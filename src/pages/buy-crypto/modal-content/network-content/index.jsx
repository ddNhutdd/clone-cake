import { IoClose } from 'react-icons/io5';
import css from './network-content.module.scss';
import NetworkItem from './network-item';
import pancake from 'imgs/staking-1.png'
import { useState } from 'react';
import PropTypes from 'prop-types'

function NetworkContent(props) {
	const {
		close,
		setSelectedTed,
	} = props;

	const listNetwork = [
		{
			id: 1,
			img: pancake,
			text: `All Network`
		},
		{
			id: 2,
			img: pancake,
			text: `BNB Chain`
		},
		{
			id: 3,
			img: pancake,
			text: `Etherum`
		},
		{
			id: 4,
			img: pancake,
			text: `Polygon zkEVM`
		},
	]

	const renderList = (list) => {
		return list?.map(item => {
			return (
				<NetworkItem
					key={item.id}
					content={item}
					active={networkSelected.id === item.id}
					onClick={networkItemClickHandle.bind(null, item)}
				/>
			)
		})
	}

	const networkItemClickHandle = (selectedNetwork) => {
		setNetworkSelected(() => selectedNetwork);
		networkSelectedClose();
		setSelectedTed(selectedNetwork?.text)
	}

	const [networkSelected, setNetworkSelected] = useState(listNetwork.at(0));
	const networkSelectedClose = () => {
		close()
	}

	return (
		<div className={css.network}>
			<div className={css.network__header}>
				<div>
					Token by network
				</div>
				<div onClick={networkSelectedClose} className='flex items-center'>
					<IoClose />
				</div>
			</div>
			<div className={css.network__line}></div>
			<div className={css.network__content}>
				{renderList(listNetwork)}
			</div>
		</div>
	)
}

NetworkContent.propTypes = {
	close: PropTypes.func,
	setSelectedTed: PropTypes.func,
}

export default NetworkContent;