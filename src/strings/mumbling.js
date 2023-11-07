const accum = (s) => {
    const arr1 = [...s]
    const arr2 = []
    for(let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i].repeat(i+1))
    }
    const newStr = arr2.map(item => item.slice(0,1).toUpperCase() + item.substring(1).toLowerCase()).join("-")
    return newStr
}

module.exports = accum