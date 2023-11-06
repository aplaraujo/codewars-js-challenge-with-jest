const getMiddle = require('../src/strings/get-the-middle-characters')

describe('Middle', () => {
    it('should return "es"', () => {
        expect(getMiddle("test")).toEqual("es")
    })

    it('should return "t"', () => {
        expect(getMiddle("testing")).toEqual("t")
    })

    it('should return "dd"', () => {
        expect(getMiddle("middle")).toEqual("dd")
    })

    it('should return "A"', () => {
        expect(getMiddle("A")).toEqual("A")
    })
})