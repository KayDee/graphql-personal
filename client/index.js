import './style'
import { Component } from 'preact'

import { Editor } from './components/editor'


export default class App extends Component {
	render() {
		return (
			<div style={{height: '100%', display: 'inline-block'}}>
				<Editor />
			</div>
		);
	}
}
