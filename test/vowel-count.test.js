const getCount = require('../src/strings/vowel-count')

describe('Vowel count', () => {
    it('should return 5', () => {
        expect(getCount('abracadabra')).toEqual(5)
    })
})