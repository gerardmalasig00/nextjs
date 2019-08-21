import React from 'react'
import Friend from './Friend'

const Friends = props => {
	
	return(
		<React.Fragment>
			{props.friendsList.map(friend => 
				<Friend 
				key={friend.name}
				friend={friend.name}
				payment={friend.orderTotal}
				handleShowOrderForm={props.handleShowOrderForm}
				showOrderFormState={props.showOrderFormState}
				handleSubmitOrder={props.handleSubmitOrder}
				handleOrderNameChange={props.handleOrderNameChange}
				handleOrderPriceChange={props.handleOrderPriceChange}
				showAddOrderFormState={props.showAddOrderFormState}
				orderList={props.orderList}
				friendNameState={props.friendNameState}
				/>
		
			)}

		</React.Fragment>

	)
}

export default Friends;