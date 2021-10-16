import React, { useState } from "react"
import ShowList from "./ShowList";
import CustomButton from "./CustomButton";
import RenderChild from "./RenderChild";

const ParentFunction = () => {
	const [countA, setCountA] = useState(0);
	const [countB, setCountB] = useState(0);
	const [listing, setListing] = useState([
		{id: 1, name: 'name1'},
		{id: 2, name: 'name1'},
		{id: 3, name: 'name2'},
		{id: 4, name: 'name3'},
		{id: 5, name: 'name4'},
		{id: 6, name: 'name5'},
	]); // { id: asc }

	const newCountA = () => {
		setCountA(countA + 1);
	}
	const newCountB = () => {
		setCountB(countB + 1);
	}
	return <div>
		{/* Mind that rendering affects all child components are due to changes of parent states or props passed to child. 
			check components below for hint */}
		<RenderChild name={"child 1"} count={countA}/>
		<RenderChild name={"child 2"} count={countB}/>
		{/* Create custom components as much possible para makita sa React Devtool bahalag as minor as button lang*/}
		<CustomButton onClickFunc={newCountA}/>
		<CustomButton onClickFunc={newCountB}/>
		{/* key on mapped data also helps on rerendering issues. */}
		{
			listing.map(i => <ShowList key={`item-${i.id}`} item={i}/>)
		}
	</div>
}

export default ParentFunction
