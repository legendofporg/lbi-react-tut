import React, { useState } from "react"

const RenderChild = ({count = 0, name = "Sample", ...props}) => {
	console.log(`Rendering counter ${count} by ${name}`);
	return <div>
		<h3>{count}</h3>
	</div>
}

export default React.memo(RenderChild)
