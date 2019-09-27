  const jsdom = require('jsdom');
  const {
      JSDOM
  } = jsdom

  describe('class JamBuddy()', () => {
      beforeEach(() => {
        const dom = new JSDOM(`
        <html lang="en">
        <body>
            <p id="notes">selected notes</p>
        </body>
        </html>
        `)
          global.document = dom.window.document;
          global.window = dom.window;
          global.navigator = dom.window.navigator;

      })
      it('should have the ID that displays the selected notes', () => {
          let selectedNotes = require('./semitoneGUI');
          expect(global.document.getElementById('notes').innerHTML).toBe('selected notes');
          selectedNotes.selectNotes()
          expect(global.document.getElementById('notes').innerHTML).toEqual(jasmine.any(Array))
      })
      it('should have an ID that displays the selected notes', () => {
          let selectedNotes = require('./semitoneGUI');
          
          let semitoneNotes = new selectedNotes.selectNotes()
          spyOn(semitoneNotes, 'selectNotes')
          expect(o.notes).toEqual(jasmine.any(Array))
      })

  })