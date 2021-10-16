import React from "react"

//This code outputs the same on SimpleFunction
class SimpleClass extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			content: [],
			others: "",
		}
		//Instead of binding to the onclick callback. Bind the class on the constructor instead so bind wont trigger every rendering.
		this.updateState = this.updateState.bind(this)
	}

	componentDidUpdate(prevProps){
		const { count, content, others } = this.state

		if(count != prevProps.count) {
			//checks count here
		}

		if(content != prevProps.content) {
			//checks content here
		}

		if(others != prevProps.others) {
			//check for others variable here
		}
	}

	updateState() {
		this.setState({ ...this.state, count: this.state.count+1 })
	}

	render() { 
		return <div>
			<h3>{this.state.count}</h3>
			{ this.state.count > 5 && <div>Something</div> }
			<button onClick={
				//Discourage use of anon functions
				// ()=> this.setState({ ...this.state, count: this.state.count+1 })
				this.updateState
			}>Increment</button>
		</div>
	}
}

export default SimpleClass
