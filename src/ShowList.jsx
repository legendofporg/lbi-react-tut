import React from 'react'

const ShowList = ({ item = {} }) => {
	console.log(`Rendering id ${item.id} : ${item.name}`);
	return <div>{item.id}: {item.name}</div>
}

export default React.memo(ShowList);
