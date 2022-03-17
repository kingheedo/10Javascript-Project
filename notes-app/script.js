const notes = JSON.parse(localStorage.getItem("notes"));
if(notes){
    notes.forEach((noteValue) => {
        addNote(noteValue)
    })
}

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => {
    addNote();
})

function addNote(noteValue =""){
    const note = document.createElement('div');
    note.classList.add("note");
    note.innerHTML = `
    <div class="tools">
            <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
    </div>
    <div class="main hidden">
    </div>
    <textarea></textarea>
    `;
    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');

    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    editBtn.addEventListener("click", () => {
        main.classList.toggle('hidden');    
        textArea.classList.toggle('hidden');
    })
    main.innerHTML = noteValue
    textArea.value = noteValue
    textArea.addEventListener('input', (e) => {
        const {value} = e.target;
        main.innerHTML = marked(value);
        updateLS();
    })


    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLS();
    })
    document.body.appendChild(note);

    
}
function updateLS(){
    const notesTextArea = document.querySelectorAll('textarea');
    const notes = [];
    notesTextArea.forEach(noteText => {
        notes.push(noteText.value)
    })
    localStorage.setItem('notes', JSON.stringify(notes))
}