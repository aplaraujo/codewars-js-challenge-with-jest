const positiveSum = require('../src/arrays/sum-of-positives')

describe('sum of positive', () => {
    it('should return 20', () => {
        expect(positiveSum([1,-4,7,12])).toEqual(20)
    })

    it('should return 15', () => {
        expect(positiveSum([1,2,3,4,5])).toEqual(15)
    })

    it('should return 13', () => {
        expect(positiveSum([1,-2,3,4,5])).toEqual(13)
    })

    it('should return 0 in case of empty array', () => {
        expect(positiveSum([])).toEqual(0)
    })

    it('should return 0 in case of array with negative values only', () => {
        expect(positiveSum([-1,-2,-3,-4,-5])).toEqual(0)
    })
})