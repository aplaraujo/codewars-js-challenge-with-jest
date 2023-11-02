const likes = require('../src/strings/who-likes-it')

describe('Like', () => {
    it('should return "no one likes this"', () => {
        expect(likes([])).toEqual("no one likes this")
    })

    it('should return "Peter likes this""', () => {
        expect(likes(['Peter'])).toEqual("Peter likes this")
    })

    it('should return "Jacob and Alex like this"', () => {
        expect(likes(["Jacob", "Alex"])).toEqual("Jacob and Alex like this")
    })

    it('should return "Max, John and Mark like this""', () => {
        expect(likes(["Max", "John", "Mark"])).toEqual("Max, John and Mark like this")
    })

    it('should return "Alex, Jacob and 2 others like this"', () => {
        expect(likes(["Alex", "Jacob", "Mark", "Max"])).toEqual("Alex, Jacob and 2 others like this")
    })
})