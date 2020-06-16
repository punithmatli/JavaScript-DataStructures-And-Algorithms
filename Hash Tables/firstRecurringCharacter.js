const firstRecurringCharacter = (arr) => {
	const mySet = new Set()
	for(let i=0; i<arr.length; i++) {
		if(mySet.has(arr[i])) {
			return arr[i]
		}
		mySet.add(arr[i])
	}
	return undefined
}

console.log(firstRecurringCharacter([2,3,1,2,4,5,4,2]))