import React from 'react';
import ReactDOM from 'react-dom';

let googlefonts = document.createElement('link');
googlefonts.href = 'https://fonts.googleapis.com/css?family=Source+Code+Pro:200,400|Astloch';
googlefonts.setAttribute('rel', 'stylesheet');
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
						<p><b>currently:</b> freelance (aka <a>hire me</a>)</p>
						<p><b>previously:</b> lead developer and designer at springwise</p>
						<p>hiya, my name is tom hughes and i'm a web developer based in london, uk. i specialize in javascript and like using new technologies like&nbsp;
						<span style={{color: 'red'}}>r</span>
						<span style={{color: 'yellow'}}>e</span>
						<span style={{color: 'lime'}}>a</span>
						<span style={{color: 'magenta'}}>c</span>
						<span style={{color: 'orange'}}>t</span> and&nbsp;
						<span style={{color: 'cyan'}}>e</span>
						<span style={{color: 'pink'}}>s</span>
						<span style={{color: 'turquoise'}}>6</span>. in fact, this website is built using both.</p>
						<p>as well as writing maintainable code, i'm pretty good at design and also make 3d animations and sometimes comics in my spare time.</p>
						<a>code</a> <a>art</a> <a>writing</a>
						<p>ok@tomhuhges.com +44 772 5577 327</p>
					</div>
					<img id="computer" src="assets/img/computer4.gif" />
				</div>
			</div>
			);
	}
});

ReactDOM.render(
	<Site />,
	document.getElementById('app')
);