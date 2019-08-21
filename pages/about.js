import React, {useState} from 'react';
import Layout from '../components/Layout';
import LogNReg from '../components/LogNReg';
import {useSessionStorageState} from 'react-storage-hooks';
import {createBrowserHistory} from 'history-next';



const About = () => {
	
	const history = createBrowserHistory
	const[aboutState, setAboutState] = useState(true)
	const[logformState, setLogFormState] = useState(false);
	const[regformState, setRegFormState] = useState(false);
	const[emailState, setEmailState] = useState();
	const[passwordState, setPasswordState] = useState();
	const[userState, setUserState]=useState([]);
	const[logEmailState, setLogEmailState] = useState();
	const[logPasswordState, setLogPasswordState] = useState();
	const[logUserState, setLogUserState]=useState([])
	const[userEmailState, setUserEmailState]=useSessionStorageState("email","")
	const[errorState, setErrorState]=useState()
	const[successState, setSuccessState]=useState()

	const handleLogform = () => {
		setLogFormState(true)
		setRegFormState(false)

	}



	const handleRegform = () => {
		setRegFormState(true)
		setLogFormState(false)
	}

	const email = e => {
		let email = e.target.value
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
		  {
			setEmailState(email)
			setErrorState("")
		    return (true)
		  }
		  	setEmailState("")
		    return (false)
		    

	}

	const password = e => {
		setPasswordState(e.target.value)
		
	}

	const logEmail = e => {
		setLogEmailState(e.target.value)

	}

	const logPassword = e => {
		setLogPasswordState(e.target.value)

	}

	const handleRegister = e => {
		e.preventDefault();
		if(emailState !== ""){

		let user =  {"email": emailState, "password": passwordState};
				setUserState([...userState, user]);
				setRegFormState(true)
				setLogFormState(true)
				setErrorState("")
		}else {
			setErrorState(<span className="alert alert-danger pb-4">You entered invalid email</span>)
		}
	}

	const handleLogin = e => {
		e.preventDefault();
		let user = userState.map(user=>{
		if(user.email === logEmailState && user.password === logPasswordState){
			let logUser =  {"email": logEmailState, "password": logPasswordState};
			setLogUserState([...logUserState, logUser]);
			setUserEmailState(user.email)	
			
			setSuccessState(<span className="alert alert-success text-center">Login Successfully</span>)
			setLogFormState(false)
			setRegFormState(false)
			setErrorState("")
		}else {
			setErrorState(<span className="alert alert-danger">Email or password not match</span>)
		}

		})
	}
	const handleLogout = () =>{
		setSuccessState("")
		setUserEmailState("")
	}
		return(
		<Layout>
			<div className="about">
				<LogNReg 
				aboutState = {aboutState}
				logformState = {logformState}
				regformState = {regformState}
				handleLogform = {handleLogform}
				handleRegform = {handleRegform}
				emailState = {emailState}
				email = {email}
				password = {password}
				handleRegister = {handleRegister}
				handleLogin = {handleLogin}
				logEmail = {logEmail}
				logPassword = {logPassword}
				errorState = {errorState}
				userEmailState = {userEmailState}
				successState = {successState}
				handleLogout = {handleLogout}

				/>
			</div>
					
		</Layout>

	)
}

export default About;