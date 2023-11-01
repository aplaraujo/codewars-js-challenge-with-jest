const disemvowel = require('../src/strings/disemvowel-trolls')

describe('Stop trolls', () => {
    it('should return "Ths wbst s fr lsrs LL!"', () => {
        expect(disemvowel("This website is for losers LOL!")).toEqual("Ths wbst s fr lsrs LL!")
    })

    it('should return "N ffns bt, yr wrtng s th wrst"', () => {
        expect(disemvowel("No offense but, your writing is the worst")).toEqual("N ffns bt, yr wrtng s th wrst")
    })

    it('should return "Wht r y,  cmmnst?"', () => {
        expect(disemvowel("What are you, a communist?")).toEqual("Wht r y,  cmmnst?")
    })
})