class JamBuddy {
  constructor(notes, selectedSemitoneNotes, rightAnswer, inputNumber) {
    this.notes = ['A',
      ['A#', 'B♭'],
      'B',
      'C',
      ['C#', 'D♭'],
      'D',
      ['D#', 'E♭'],
      'E',
      'F',
      ['F#', 'G♭'],
      'G',
      ['G#', 'A♭']
    ];
    this.selectedSemitoneNotes = selectedSemitoneNotes;
    this.rightAnswer = rightAnswer;
    this.inputNumber = inputNumber;
  }

  

  // selectNotes randomizes the array and returns two new letters in the array
  
  selectNotes() {
    let array = [...this.notes];

    // shuffle the array
    let shuffledArray = array.sort(() => Math.random() - 0.5)

    // reduce the array two only 2 elements
    let newArray = shuffledArray.slice(0, 2)

    /*  convert the array of elements to individual strings in a new array (takes the sharps and flats 
     out of the second array) */
    let selectedNotes = newArray.toString().split(',')

    // randomize new array with either two or three elements 
    this.selectedSemitoneNotes = selectedNotes.sort(() => Math.random() - 0.5).slice(0, 2)

    return window.document.getElementById('notes').innerHTML = this.selectedSemitoneNotes.sort();
  }

  checkAnswer() {
    let score = 0;

    this.inputNumber = Number(window.document.getElementById('value').value);

    this.rightAnswer = Math.abs(this.notes.indexOf(this.selectedSemitoneNotes[1]) - this.notes.indexOf(this.selectedSemitoneNotes[0]));


    if (this.inputNumber === this.rightAnswer) {
      document.getElementById('score').innerHTML = score + 1
      return window.document.getElementById('answer').innerHTML = `Super! You got it right`;
    } else {
      return window.document.getElementById('answer').innerHTML = `Sorry! The answer is ${this.rightAnswer}. Try again`;
    }


  }

  scoreCounter() {
    let score = 0; 
    if(this.inputNumber === this.rightAnswer){
      let points = score + 1; 
      return document.getElementById('score').value = points;
    } else{
      return document.getElementById('message').innerHTML = `Sorry, you're going to have to start again`
    }

  }


  
  

    hide(){
    let x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
}   

let verify = new JamBuddy()
verify.selectNotes()
verify.checkAnswer()
verify.revealAnswer();
verify.hide();

module.exports = verify;