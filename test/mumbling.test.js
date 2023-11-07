const accum = require("../src/strings/mumbling")

describe('Mumbling', () => {
    it('should return "A-Bb-Ccc-Dddd"', () => {
        expect(accum("abcd")).toEqual("A-Bb-Ccc-Dddd")
    })

    it('should return "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"', () => {
        expect(accum("RqaEzty")).toEqual("R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy")
    })

    it('should return "C-Ww-Aaa-Tttt"', () => {
        expect(accum("cwAt")).toEqual("C-Ww-Aaa-Tttt")
    })
})