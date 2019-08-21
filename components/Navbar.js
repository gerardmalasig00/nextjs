import Link from 'next/link'

const Navbar = () => {

	return (
		<React.Fragment>
			<nav className="navbar navbar-expand navbar-dark bg-dark ">
				<div className="container">
					<a className="navbar-brand" href="/">Flames </a>
					<div className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link href="/index"><a>Home</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/about"><a>About</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/Flames"><a>Flame</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/billdivider"><a>Bill Divider</a></Link>
						</li>
					</ul>
					</div>
				</div>
			</nav>
			<style jsx>
				{`
				
				ul li a {
					color: #07e3cd;
					text-decoration:non;
				}
				`}
			</style>
		</React.Fragment>
	)
}

export default Navbar