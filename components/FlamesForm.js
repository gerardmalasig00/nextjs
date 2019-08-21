import React, {useState} from "react";

const FlamesForm = () => {
	const [crushNameState, setCrushNameState] = useState();
	const [userNameState, setUserNameState] = useState();
	const [resultState, setResultState] = useState();

	const handleCrushNameChange = e => {
		let crush = e.target.value
		setCrushNameState(crush)
		console.log(crush)
	}

	const handleFullNameChange = e => {
		let userName = e.target.value
		setUserNameState(userName)
		console.log(userName)
	}

	const handleSubmitFlames = e => {
		e.preventDefault()
		let crushName = crushNameState.replace(/\s/g,'').toLowerCase();
		console.log(crushName);
		let userName = userNameState.replace(/\s/g,'').toLowerCase();
		console.log(userName);

		let crush = crushName.match(/[flames]/gi);
		console.log(crush);

		let user = userName.match(/[flames]/gi);
		console.log(user);

		let result = ""
		if(crush === null && user !== null){
			result = user.length
		}else if(crush !== null && user === null){
			result = crush.length
		}else if(crush === null && user=== null){
			result = "9"
		}else {
			crush.length + user.length;
		}

		if(result === 9){
			setResultState("Walang Kayo")
		}
		else if(result%6 === 1){
			setResultState("Flower")
		}
		else if(result%6 === 2){
			setResultState("Laravel")
		}
		else if(result%6 === 3){
			setResultState("Amorsolo")
		}
		else if(result%6 === 4){
			setResultState("Mongo")
		}
		else if(result%6 === 5){
			setResultState("Express")
		}
		else if(result%6 === 6){
			setResultState("Suave")
		}
		else if(result%6 === 0){
			setResultState("G")
		}
	}
	let flamesform = 
	<React.Fragment>
	<div>
		{ resultState ?
			<div crushName="">
				<h1 crushName="text-primary">{resultState}</h1>
			</div>
			:
			""
		}
	</div>	
	<form onSubmit={handleSubmitFlames}>
		<fieldset>
			<legend>Love Calculator</legend>
			<div className="form-group">
				<label htmlFor="crushName">Enter Your Crush Name</label>
				<input 
				type="text" 
				name="crushName" 
				className="form-control"
				onChange={handleCrushNameChange}/>
				<h3>Your Crush's is: {crushNameState}</h3>
			</div>
			<div className="form-group">
				<label htmlFor="fullName">Enter Your Full Name</label>
				<input 
				type="text" 
				name="userName" 
				className="form-control"
				onChange={handleFullNameChange}/>
				<h3>Your Name is: {userNameState}</h3>
			</div>
			<button 
				className="btn btn-warning"
				type="submit">Calculate</button>
		</fieldset>
	</form>
	</React.Fragment>
	return flamesform;
}

export default FlamesForm;