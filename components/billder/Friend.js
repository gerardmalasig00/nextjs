import React from 'react'
import AddOrderForm from './AddOrderForm'
import Order from './Order'

const Friend = props => {

	return(
		<React.Fragment>
			<div className="card text-white bg-primary mb-3">
			  <div className="card-header">{props.friend}</div>
			  <div className="card-body">
			    <h4 className="card-title">You Need to Pay: Php{props.payment}</h4>
			    <button 
			    className="btn btn-success"
			    onClick={()=>props.handleShowOrderForm(props.friend)}>Add Order</button>
			<AddOrderForm 
				handleSubmitOrder={props.handleSubmitOrder}
				handleOrderNameChange={props.handleOrderNameChange}
	 			handleOrderPriceChange={props.handleOrderPriceChange}
	 			showAddOrderFormState={props.showOrderFormState}
	 			handleShowOrderForm={props.handleShowOrderForm}
	 			friend={props.friend}
	 			friendNameState={props.friendNameState}
			/>
			 <ul>
			 	{props.orderList.map(order=>
					<Order 
						key={order.name}
						order={order}
						friend={props.friend}
					/>
			 	)}
			 </ul>
			  </div>
			</div>


		</React.Fragment>
	)
}

export default Friend;