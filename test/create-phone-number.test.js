const createPhoneNumber = require('../src/strings/create-phone-number')

describe('Phone number', () => {
    it('should return "(123) 456-7890"', () => {
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890")
    })

    it('should return "(111) 111-1111"', () => {
        expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual("(111) 111-1111")
    })
})