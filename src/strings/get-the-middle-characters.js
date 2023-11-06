const getMiddle = (s) => {
    const div1 = s[Math.floor((s.length - 1) / 2)]
    const div2 = s[Math.floor(s.length / 2)]
    return s.length % 2 === 0 ? `${div1}${div2}` : `${div1}`
}

module.exports = getMiddle