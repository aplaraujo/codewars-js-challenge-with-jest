function sumTwoSmallestNumbers(arr) {
  let aux;
  for(let i = 0; i < arr.length; i++) {
	for(let j = 0; j < arr.length -1; j++) {
            if(arr[i] < arr[j]) {
              aux = arr[i]
              arr[i] = arr[j]
              arr[j] = aux
            }
        }
    }

    let lowest = arr[0]
    let secondLowest = arr[1]

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < lowest) lowest = arr[i]

        if(arr[i+1] < secondLowest) secondLowest = arr[i+1]
    }

    const sum = lowest + secondLowest
    return sum
}

module.exports = sumTwoSmallestNumbers