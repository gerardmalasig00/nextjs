import React from 'react';

const AddPeople = props => {
	let addPeopleForm ="";
	if(props.showAddFormState === true){
		addPeopleForm = 
		<form id="addPeople" onSubmit={props.handleSubmitAddPeople}>
			<fieldset>
				<div  className="form-group">
					<label htmlFor="death">Death Eater's Name</label>
					<input 
					className="form-control" 
					type="text" 
					name="Deatch"
					onChange={props.handleAddPeopleChange}/>
				</div>
				<button id="add" type="submit">Add</button>
			</fieldset>
		</form>
	}
	return addPeopleForm;
}
export default AddPeople;