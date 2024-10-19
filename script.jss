document.addEventListener('DOMContentLoaded', function () {
    const noteForm = document.getElementById('noteForm');
    const noteInput = document.getElementById('noteInput');
    const notesSection = document.getElementById('notes');

    // Function to add a new note
    noteForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const noteText = noteInput.value.trim();
        if (noteText !== "") {
            addNote(noteText);
            noteInput.value = ""; // Clear the input
        }
    });

    // Function to display a new note
    function addNote(text) {
        const note = document.createElement('div');
        note.classList.add('note');

        note.innerHTML = `
            <p>${text}</p>
            <button class="delete">Delete</button>
        `;

        // Append the note to the section
        notesSection.appendChild(note);

        // Delete note functionality
        note.querySelector('.delete').addEventListener('click', function () {
            note.remove();
        });
    }
});
