describe("JamBuddy", function() {
    //arrange
     this.notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

    // act
    notes = JamBuddy(this.notes);

    // assert
    expect(notes).toBe(this.notes)
    })
   it("selectNotes should randomize the array and return two new letters in the array", function() {
    expect(JamBuddy.selectNotes()).toBe(this.notes)
})
