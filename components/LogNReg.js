import React from 'react';

const LogNReg = props => {
	let form = "";
	if(props.logformState === true){
		form =
		<React.Fragment>
			<div className="log">
				<h1 className="text-center">Login</h1>
				<div>{props.errorState}</div>
				<form onSubmit={props.handleLogin}>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input 
						type="text" 
						className="form-control"
						onChange={props.logEmail}/>
						<label htmlFor="password">Password</label>
						<input 
						type="password" 
						className="form-control"
						onChange={props.logPassword}/>
					<button className="logBtn">Login</button>
					<button className="regBtn" onClick={props.handleRegform}>Don't have an account?</button>
					</div>
				</form>
			</div>
		</React.Fragment>

		}else if(props.regformState === true) {
			form =
		<React.Fragment>
			<div className="reg">
				<div className="row">
					<div className="col-lg-6">
						<h1 className="text-center">Note:</h1>
						<p>This is for project puposes only, and whenever you refresh the page your account will be deleted, so feel free to register any email and password I'm sure you will love my awesome projects.
						</p>
					</div>
					<div className="col-lg-6">
						<h1 className="text-center">Register</h1>
						<div>
							{props.errorState}
						</div>
						<form onSubmit={props.handleRegister}>
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input 
								type="text" 
								className="form-control"
								onChange={props.email}/>
								<label htmlFor="password">Password</label>
								<input 
								type="password" 
								className="form-control"
								onChange={props.password}/>
							<button type="submit" className="logBtn">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
		}else {
			form =
		<React.Fragment>
			<div className="aboutContent">
			{props.successState !== "" ?
			<React.Fragment>
				<div className="pb-2">
					{props.successState}
				</div>
			</React.Fragment>
			:
			""
			}
				<h1>Why I made this?</h1>
				<p>
				I made this website using my newly found framework which is <em>Nextjs</em> which is a framework of react.</p>
				<p>Next.js is inspired by PHP and benefits from a great system of JavaScript modules, which allows us to export the components of our application, which allows us to perform individual tests for each component, as well as download thousands of components or modules from npm.</p>
				{props.userEmailState !== "" ?
			<React.Fragment>
				<h4 className="text-info">{props.userEmailState}</h4>
				<button id="log" className="buttons"
				onClick={props.handleLogout}>Logout</button>
			</React.Fragment>
			:
			<React.Fragment>
				<button 
					id="sign" 
					className="buttons" 
					onClick={props.handleRegform}>Register</button>
				<button 
					id="log" 
					className="buttons"
					onClick={props.handleLogform}>Login</button>
			</React.Fragment>
			}
			</div>
		</React.Fragment>
				
		}


	
	return form;
}

export default LogNReg;