const sumTwoSmallestNumbers = require('../src/arrays/sum-of-the-lowest-positive-integers')

describe('sum of lowest', () => {
    it('should return 13', () => {
        expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toEqual(13)
    })

    it('should return 6', () => {
        expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toEqual(6)
    })

    it('should return 10', () => {
        expect(sumTwoSmallestNumbers([3, 87, 45, 12, 7])).toEqual(10)
    })

    it('should return 24', () => {
        expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toEqual(24)
    })

    it('should return 16', () => {
        expect(sumTwoSmallestNumbers([52, 76, 14, 12, 4])).toEqual(16)
    })
})