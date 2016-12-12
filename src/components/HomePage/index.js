import React from 'react'
import { Link } from 'react-router'
import ReactSpan from './ReactSpan'
import ES6Span from './ES6Span'
import computerGif from 'file!../../assets/img/computer5.gif'

class HomePage extends React.Component {
	render() {
		return (
			<div className="content">
				<div id="title-box">
					<h2>javascript developer</h2>
					<p>hiya, my name is tom hughes and i'm a web developer based in london, uk. i specialize in javascript and like using new technologies like <ReactSpan /> and <ES6Span />. in fact, this website is built using both.</p>
					<p>as well as writing maintainable code, i'm pretty good at design and also make 3d animations in my spare time.</p>
					<p><b>currently:</b> freelance (aka <a href="mailto:ok@tomhuhges.com" className="white">hire me</a>)</p>
					<p><b>previously:</b> lead developer and designer at springwise</p>
					<p className="white"><a href="mailto:ok@tomhuhges.com">ok@tomhuhges.com</a> ~ <a href="tel:+447725577327">+44 772 5577 327</a></p>
				</div>
				<img id="computer" src={computerGif} />
			</div>
		)
	}
}

export default HomePage