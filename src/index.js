import React from 'react';
import ReactDOM from 'react-dom';

let googlefonts = document.createElement('link');
googlefonts.href = 'https://fonts.googleapis.com/css?family=Source+Code+Pro:200,400|Astloch';
googlefonts.setAttribute('rel', 'preload');
googlefonts.setAttribute('as', 'style');
googlefonts.setAttribute('onload', 'this.rel="stylesheet"');
document.head.appendChild(googlefonts);

let app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

let Site = React.createClass({
	render: function () {
		return (
			<div id="main" className="page">
				<div className="container">
					<div id="title-box">
						<h1>Tom Hughes</h1>
						<h2>javascript developer</h2>
						<a href="https://twitter.com/tomhuhges">twitter</a> <a href="https://github.com/tomhuhges">github</a>
						<p><b>currently:</b> freelance (aka <a>hire me</a>)</p>
						<p><b>previously:</b> lead developer and designer at springwise</p>
						<p>hiya, my name is tom hughes and i'm a web developer based in london, uk. i specialize in javascript and like using new technologies like <b>
						<span style={{color: 'red'}}>r</span>
						<span style={{color: 'yellow'}}>e</span>
						<span style={{color: 'lime'}}>a</span>
						<span style={{color: 'magenta'}}>c</span>
						<span style={{color: 'orange'}}>t</span></b> and <b>
						<span style={{color: 'cyan'}}>e</span>
						<span style={{color: 'pink'}}>s</span>
						<span style={{color: 'turquoise'}}>6</span></b>. in fact, this website is built using both.</p>
						<p>as well as writing maintainable code, i'm pretty good at design and also make 3d animations in my spare time.</p>
						<p>ok@tomhuhges.com +44 772 5577 327</p>
					</div>
					<img id="computer" src="assets/img/computer5.gif" />
				</div>
			</div>
			);
	}
});

ReactDOM.render(
	<Site />,
	document.getElementById('app')
);