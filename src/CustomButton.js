import React, { useState } from "react"

const CustomButton = ({onClickFunc = () => {}}) => {
	return <button onClick={onClickFunc}>Increment</button>
}

export default CustomButton
