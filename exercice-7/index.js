
'use strict';

let notes = [10, 13, 13, 12, 15, 12, 11, 16, 14]
compteNotes(notes);

function compteNotes(notes){
    let count = 0;

    for(let i = 0; i < notes.length; i++){
        count += parseFloat(notes[i], 20);
    }

    let result = count/notes.length
    document.write("the sum of all notes is:" + result);
}
