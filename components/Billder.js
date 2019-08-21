import React, {useState} from 'react';
import AddPeople from './billder/AddPeople'
import Friends from "./billder/Friends"

const Billder = () => {
	const [billderFormState, setBillderFormState] = useState();
	const [showAddFormState, setShowAddFormState] = useState(false);
	const [addPeopleState, setAddPeopleState]= useState();
	const [friendsList, setFriendsListState] = useState([])
	const[showOrderFormState, setShowAddOrderFormState] =useState(false);
	const [orderName, setOrderNameState] = useState()
	const [orderPrice, setOrderPriceState] = useState()
	const [friendNameState, setFriendNameState]= useState()
	const [orderList, setOrderList] = useState([])
	const [totalState, setTotalState] = useState()
	
	const handleTotalChange = e => {
		setTotalState(e.target.value)
	}

	const handleShowAddFormState = () => {
		setShowAddFormState(true)
	}

	const handleAddPeopleChange = e => {
		setAddPeopleState({name: e.target.value, orderTotal: 0})
		console.log(e.target.value)
	}

	const handleSubmitAddPeople = e => {
		e.preventDefault();
		setFriendsListState([...friendsList, addPeopleState])
	}
	
	const handleShowOrderForm = friend => {
		setShowAddOrderFormState(true)
		setFriendNameState(friend)

	}
	

	const handleOrderNameChange= e =>{
		setOrderNameState(e.target.value)
	}
	const handleOrderPriceChange= e =>{
		setOrderPriceState(e.target.value)

	}
	const handleSubmitOrder= e=>{
		e.preventDefault();
		let order = {"name": friendNameState, "order": orderName, "price": orderPrice}
		setOrderList([...orderList, order])
		let newFriendList = friendsList.map(friend=>{
			if(friend.name === friendNameState){
				friend.name = friendNameState
				friend.orderTotal = parseInt(friend.orderTotal)+parseInt(orderPrice)
				return friend;
			}else {
				return friend;
			}
		})


	
	}
	const handleDivide = e => {
		let orderTotal = orderList.map(order=>parseInt(order.price))
		console.log(orderTotal)
		let orderSum = orderTotal.reduce((a,b)=> a+b, 0)
		let remaining = totalState - orderSum
		let payment = remaining/friendsList.length

		let newFriendList = friendsList.map(friend=>{
			
				friend.name = friend.name
				friend.orderTotal = parseInt(friend.orderTotal)+parseInt(payment)
				return friend;
		})

		setFriendsListState(newFriendList);
		setShowAddOrderFormState(false);
	}

	let billderForm =
	<React.Fragment>
				<div className="form-group">
					<label htmlFor="total">Total Bill</label>
					<input 
						type="number" 
						className="form-control"
						name="total"
						onChange={handleTotalChange}/>
					<button 
					className="btn btn-warning"
					onClick={handleDivide}>Divide</button>
				</div>
				<div className="d-flex">
					<h4>Add Death Eaters </h4>
					<button 
					className="btn btn-danger mx-3"
					onClick={handleShowAddFormState}>+</button> 
				</div>
					<AddPeople 
					handleShowAddFormState={handleShowAddFormState}
					showAddFormState={showAddFormState}
					handleAddPeopleChange={handleAddPeopleChange}
					handleSubmitAddPeople={handleSubmitAddPeople}
					/>
					<Friends 
					friendsList={friendsList}
					handleShowOrderForm={handleShowOrderForm}
					showOrderFormState={showOrderFormState}
					handleSubmitOrder={handleSubmitOrder}
					handleOrderNameChange={handleOrderNameChange}
					handleOrderPriceChange={handleOrderPriceChange}
					setShowAddOrderFormState={setShowAddOrderFormState}
					orderList={orderList}
					friendNameState={friendNameState}
					/>

	</React.Fragment>

	return billderForm;
}

export default Billder;

		