const positiveSum = arr => {
    let sum = 0
    const positiveNumbersOnlyArray = []
    if(arr.length === 0) return 0
    for(let i = 0; i < arr.length; i++) {
            if(arr[i] > 0) {
            positiveNumbersOnlyArray.push(arr[i])
            sum = sum + arr[i]
        }
	}
    return sum
}

module.exports = positiveSum