import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import "../assets/style.css";

const Layout = props => {
	return (
		<React.Fragment>
			<Head>
				<title>awoops</title>
				<link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.css" />
			</Head>
			<Navbar />
			<div>
				{props.children}
			</div>
			<Footer />
		</React.Fragment>
	)
}

export default Layout;