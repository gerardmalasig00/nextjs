import React from 'react';

const AddOrderForm = props => {
	let orderForm ="";
	

	if(props.showAddOrderFormState === true && props.friend === props.friendNameState) {
		orderForm = 
		<div>
				<form onSubmit={ props.handleSubmitOrder}>
					<fieldset className="form-group">
						<input 
							type="text"
							className="form-control"
							placeholder="Order Name"
							onChange={props.handleOrderNameChange}/>
						<input 
							type="text"
							className="form-control"
							placeholder="Order Price"
							onChange={props.handleOrderPriceChange}/>

						<button className="btn btn-info" type="submit">Add</button>
					</fieldset>
				</form>

		</div>
	}
	return orderForm;
}

export default AddOrderForm;