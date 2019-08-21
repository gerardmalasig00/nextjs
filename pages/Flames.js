import Layout from "../components/Layout";
import FlamesForm from "../components/FlamesForm"

const Flames = () => {
	
	return(
		<Layout>
			<div className="container pt-4 mb-5">
				<div className="row">
					<div className="col-6 offset-3">
						<h1 className="text-center">Welcome to Flames</h1>
						<p>The rule is very simple. Just type your Crushes Full name and 
						your Full Name then click the submit button to show the result.</p>
						<FlamesForm />
					</div>
				</div>
			</div>

		</Layout>
	)

}

export default Flames;