import Layout from '../components/Layout';
import Billder from "../components/Billder"

const BillDivider = () => {
	return(
	<Layout>
		<div className="container pt-5 mb-5">
			<div className="row">
				<div className="col-6 offset-3">
					<h1>Bill-der</h1>
					<p className="pb-4">Who else doesn't love to eat with their family, friends and office mate?
					but sometimes dividing the bill can be difficult, but with this app it can make your payments alot easier.</p>
					<Billder />
				</div>
			</div>
		</div>
	</Layout>
	)
}

export default BillDivider;