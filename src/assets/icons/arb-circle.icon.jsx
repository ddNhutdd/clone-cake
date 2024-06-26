import { memo } from 'react';

function ArbCircleIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none"><rect width="26.6" height="26.6" x=".7" y=".7" fill="#2D374B" stroke="#96BEDC" strokeWidth="1.4" rx="13.3" /><mask id="a" width={28} height={28} x={0} y={0} maskUnits="userSpaceOnUse" style={{maskType: 'alpha'}}><rect width={28} height={28} fill="#C4C4C4" rx={14} /></mask><g mask="url(#a)"><path fill="#28A0F0" d="m14.0861 18.6041 6.5014 10.2239 4.0057-2.3213-7.86-12.3943-2.6471 4.4917Zm13.0744 3.4692-.003-1.8599-7.3064-11.407-2.3087 3.9173 7.091 11.4303 2.172-1.2586a.9628.9628 0 0 0 .3555-.7009l-.0004-.1212Z" /><rect width="25.9" height="25.9" x="1.05" y="1.05" fill="url(#b)" fillOpacity=".3" stroke="#96BEDC" strokeWidth="2.1" rx="12.95" /><path fill="#fff" d="m.3634 28.2207-3.07-1.7674-.234-.8333L7.7461 9.0194c.7298-1.1913 2.3197-1.575 3.7957-1.5541l1.7323.0457L.3634 28.2207ZM19.1655 7.511l-4.5653.0166L2.24 27.9533l3.6103 2.0788.9818-1.6652L19.1655 7.511Z" /></g><defs><linearGradient id="b" x1={0} x2={14} y1={0} y2={28} gradientUnits="userSpaceOnUse"><stop stopColor="#fff" /><stop offset={1} stopColor="#fff" stopOpacity={0} /></linearGradient></defs></svg>


	);
}

export default memo(ArbCircleIcon);
