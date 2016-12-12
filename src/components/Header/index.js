import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
	render() {
		return (
			<nav>
				<ul>
					<li><h1><Link to="/" id="logo">tom hughes</Link></h1></li>
					<li><Link to="/code" className="menu-item"># code</Link></li>
					<li><Link to="/code" className="menu-item"># art</Link></li>
					<li><Link to="/code" className="menu-item"># writing</Link></li>
					<li><Link to="/code" className="menu-item"># link dump</Link></li>
					<li><a href="https://twitter.com/tomhuhges" className="menu-item"># twitter</a></li>
					<li><a href="https://github.com/tomhuhges" className="menu-item"># github</a></li>
				</ul>
			</nav>
		)
	}
}

export default Header