import React from 'react'
import DocumentHead from 'react-helmet'
import Header from './components/Header'

class App extends React.Component {
	render() {
		const page = this.props.children
		let pageName = page.props.route.path
		pageName = pageName ? `${pageName}page` : 'homepage'
		return (
			<div className="">
				<DocumentHead
					link={[
						{
							'rel': 'stylesheet',
							'href': 'https://fonts.googleapis.com/css?family=Source+Code+Pro:200,400|Astloch'
						}
					]}
				/>
				<div id="main" className={`page ${pageName} code bg-light-green blue flex justify-center pa4 w-100-l`}>
					<div className="container w-two-thirds-l mw8-l">
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
