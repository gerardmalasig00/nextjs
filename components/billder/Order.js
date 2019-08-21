import React from 'react'

const Order = props => {
	let orders ="";
	if(props.order.name === props.friend){
		orders =
		<li>
			<p>{props.order.order}-- P {props.order.price}</p>
		</li>
	}
	return orders;
}

export default Order;