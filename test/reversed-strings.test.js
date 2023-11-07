const solution = require('../src/strings/reversed-strings')

describe('reverse', () => {
    it('should return an empty string', () => {
        expect(solution('')).toEqual('')
    })

    it('should return the same string in case of one character', () => {
        expect(solution('h')).toEqual('h')
    })

    it('should return an error message if is not a string', () => {
        expect(solution(1)).toEqual('This is not a string')
    })

    it('should return "dlrow"', () => {
        expect(solution('world')).toEqual('dlrow')
    })

    it('should return "olleh"', () => {
        expect(solution('hello')).toEqual('olleh')
    })
})