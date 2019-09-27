let JamBuddy = require('./semitone')

describe('class JamBuddy()', () => {
    let jamBuddy;
    beforeEach(() => {
        jamBuddy = new JamBuddy();
    })
    it('should be defined', () => {
        expect(JamBuddy).toBeDefined();
    });

});

describe('class JamBuddy() methods ', () => {
    let jamBuddy
    beforeEach(() => {
        jamBuddy = new JamBuddy();
    })
    it('selectNotes() should be defined', () => {
        expect(JamBuddy).toBeDefined();
    })

    it('should be defined', () => {
        expect(jamBuddy.selectNotes()).toEqual(jasmine.any(Array));
    });
});

describe('class JamBuddy() methods ', () => {
    let jamBuddy;
    let arr
    beforeEach(() => {
        jamBuddy = new JamBuddy();
        arr = jamBuddy.selectNotes();

    })
    it('checkAnswer should be defined', () => {
        expect(JamBuddy).toBeDefined();
    });
    it(' should be defined', () => {
        expect(jamBuddy.checkAnswer(arr)).toEqual(jasmine.any(String));

    });
});