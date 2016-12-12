import React from 'react'
import DocumentHead from 'react-helmet'
import Header from './components/Header'

class App extends React.Component {
	render() {
		const page = this.props.children
		let pageName = page.props.route.path
		pageName = pageName ? `${pageName}page` : 'homepage'
		return (
			<div>
				<DocumentHead
					link={[
						{'rel': 'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=Source+Code+Pro:200,400|Astloch'}
					]}
				/>
				<div id="main" className={`page ${pageName}`}>
					<div className="container">
						<Header />
						{page}
					</div>
				</div>
			</div>
		)
	}
}

App.propTypes = {
	children: React.PropTypes.object.isRequired
}

export default App