import { h, Component } from 'preact'
import { Router } from 'preact-router'
import { Main } from './Main/main'

export default class App extends Component {

	render() {
		return (
			<div id="app">
				<center><h1>Hello World</h1></center>
				<Main />
			</div>
		)
	}
}
