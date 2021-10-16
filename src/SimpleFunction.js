import React, { useState, useEffect } from "react"

//This code outputs the same on SimpleClass
const SimpleFunction = () => {
	const [count, setCount] = useState(0);
	const [content, setContent] = useState([]);
	const [others, setOthers] = useState('');
	
	useEffect(()=>{
		//do code here like from componentDidUpdate
	}, [count, content, others])

	const newCount = (e) => {
		e.preventDefault();
		setCount(count+1)
	}

	return <div>
		<h3>{count}</h3>
		<button onClick={newCount}>Increment</button>
	</div>
}

export default SimpleFunction
