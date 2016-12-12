import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './app'
import HomePage from './components/HomePage'
import CodePage from './components/CodePage'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<route path="code" component={CodePage} />
	</Route>
)