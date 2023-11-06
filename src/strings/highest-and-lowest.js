const highAndLow = (numbers) => {
    const arr = numbers.split(" ").map(num => Number(num))
    let max = arr[0]
    let min = arr[0]
    for(let i of arr) {
        if(i > max) {
            max = i
        }
        if(i < min) {
            min = i
        }
    }
    return `${max} ${min}`
}

module.exports = highAndLow