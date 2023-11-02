const spinWords = require('../src/strings/stop-spinning-my-words')

describe('Spinning words', () => {
    it('should return "emocleW"', () => {
        expect(spinWords("Welcome")).toEqual("emocleW")
    })

    it('should return "Hey wollef sroirraw"', () => {
        expect(spinWords("Hey fellow warriors")).toEqual("Hey wollef sroirraw")
    })

    it('should return "This is a test"', () => {
        expect(spinWords("This is a test")).toEqual("This is a test")
    })

    it('should return "This is rehtona test"', () => {
        expect(spinWords("This is another test")).toEqual("This is rehtona test")
    })

    it('should return "You are tsomla to the last test"', () => {
        expect(spinWords("You are almost to the last test")).toEqual("You are tsomla to the last test")
    })

    it('should return "Just gniddik ereht is llits one more"', () => {
        expect(spinWords("Just kidding there is still one more")).toEqual("Just gniddik ereht is llits one more")
    })
})