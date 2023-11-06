const highAndLow = require('../src/strings/highest-and-lowest')

describe('High and low', () => {
    it('should return "42 -9"', () => {
        expect(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")).toEqual("42 -9")
    })

    it('should return "3 1"', () => {
        expect(highAndLow("1 2 3")).toEqual("3 1")
    })
})