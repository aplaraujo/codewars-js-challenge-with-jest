const getCount = (str) => {
    const arr = [...str]
    const vowels = []
    for(let i of arr) {
        const isVowel = i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u'
        if(isVowel) {
            vowels.push(i)
        }
    }
    return vowels.length
}

module.exports = getCount