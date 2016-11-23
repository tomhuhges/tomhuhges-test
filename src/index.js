import React from 'react';
import ReactDOM from 'react-dom';
import Snow from 'react-snow-effect';

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