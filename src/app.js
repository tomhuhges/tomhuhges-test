import React from 'react'
import DocumentHead from 'react-helmet'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
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
				<div id="main" className={`page ${pageName} code bg-light-green blue flex justify-center pa4-m w-100`}>
					<div className="container w-80 w-90-m mw6-m mw8-l">
						<Header />
						<ReactCSSTransitionGroup
							transitionName="example"
							transitionEnterTimeout={500}
							transitionLeaveTimeout={300}>
						{React.cloneElement(page, {
							key: pageName
						})}
						</ReactCSSTransitionGroup>
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
