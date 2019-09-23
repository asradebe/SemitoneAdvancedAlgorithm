    const jsdom = require('jsdom')
    const {JSDOM} = jsdom
    const {document} = new JSDOM 
    JamBuddy = require("../semitone-part2/semitoneGUI.js")
    verify = new JamBuddy()
    describe("JamBuddy", function() {
    it("jamBuddy should be defined", function() {
    expect(JamBuddy).toBeDefined()
    });

    it("select notes should be defined", function() {
        expect(verify.selectNotes()).toBeDefined()
    });
});
