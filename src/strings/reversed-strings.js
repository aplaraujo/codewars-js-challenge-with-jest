const solution = (s) => {
    if(s.length === 0) {
        return ''
    }

    if(s.length === 1) {
        return s
    }

    if(typeof s !== 'string') {
        return "This is not a string"
    }

    return s.split("").reverse().join("")
}

module.exports = solution