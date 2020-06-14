function reverse(str) {
	if(!str || str.length < 2 || typeof str !== 'string') {
		return 'hmm. Not good'
	} 
	const finalString = []
	const totalItems = str.length-1;
	
	for(let i=totalItems; i>=0; i--) {
		finalString.push(str[i])
	}
	return finalString.join('')
}

function reverse2(str) {
	return str.split('').reverse().join('')
}

const reverse3 = str => [...str].reverse().join('')

console.log(reverse('Hi My Name is Punith'))