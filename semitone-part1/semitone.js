 module.exports = class JamBuddy {
    constructor(notes, result) {
        this.notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        this.result = result;
    }
    // selectNotes randomizes the array and returns two new letters in the array
    selectNotes() {
        let array = [...this.notes];
        array.sort(() => Math.random() - 0.5);
        this.result = array.slice(0, 2);
        return this.result.sort();
    }

    checkAnswer(firstIndex) {

         firstIndex = Math.abs(this.notes.indexOf(this.result[1]) - this.notes.indexOf(this.result[0]));
        return `the distance between the results ${this.result} is ` +  firstIndex;
    }
};


