function hasPairWithSum(arr, sum) {
	let mySet = new Set()
	for (let i=0; i<arr.length; i++) {
		if(mySet.has(arr[i])) {
			return true
		}
		mySet.add(sum - arr[i])
		console.log(mySet.size)
	}
	return false
}

console.log(hasPairWithSum([1, 2, 4, 6, 7], 9))