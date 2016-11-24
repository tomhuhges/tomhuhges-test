import React from 'react';
import ReactDOM from 'react-dom';
import Snow from 'react-snow-effect';

let gif = document.createElement('img');
gif.setAttribute('src', 'assets/img/computer.gif');
gif.setAttribute('width', '500px');
document.body.appendChild(gif);

let snow = document.createElement('div');
snow.id = 'snow';
document.body.appendChild(snow);

let Site = React.createClass({
	render: function () {
		return <Snow />;
	}
});

ReactDOM.render(
	<Site />,
	document.getElementById('snow')
);