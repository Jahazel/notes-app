const textArea = document.getElementById("text-area");
const btn = document.getElementById("btn");
const noteSidebar = document.querySelector(".notes-sidebar");
let noteStorage = JSON.parse(localStorage.getItem("notes"));
let currentNoteId = localStorage.getItem("currentNoteId") || "";

function createNote() {
  let uniqueId = String(Date.now());
  currentNoteId = uniqueId;
  localStorage.setItem("currentNoteId", currentNoteId);

  if (!noteStorage) {
    let notesArray = [];
    notesArray.push({
      id: uniqueId,
      input: "",
    });

    localStorage.setItem("notes", JSON.stringify(notesArray));
  } else if (noteStorage !== null) {
    noteStorage.push({
      id: uniqueId,
      input: "",
    });

    localStorage.setItem("notes", JSON.stringify(noteStorage));
  }

  noteStorage = JSON.parse(localStorage.getItem("notes"));
}

function displayNotesSidebar() {
  let noteStorage = JSON.parse(localStorage.getItem("notes"));
  noteSidebar.innerHTML = "";

  if (!noteStorage) {
    const h1Element = document.createElement("h1");
    h1Element.textContent = "No Notes";
    noteSidebar.appendChild(h1Element);
  }

  if (noteStorage && noteSidebar.classList.contains("no-notes")) {
    noteSidebar.classList.remove("no-notes");
  }

  if (noteStorage) {
    noteStorage.forEach(({ id, input }) => {
      const noteDiv = document.createElement("div");
      const pElement = document.createElement("p");
      noteSidebar.appendChild(noteDiv);
      noteDiv.appendChild(pElement);
      noteDiv.classList.add("note-div");
      pElement.textContent = "New Note";
      noteDiv.id = id;
      textArea.value = input;

      noteDiv.addEventListener("click", () => {
        localStorage.setItem("currentNoteId", noteDiv.id);
        currentNoteId = localStorage.getItem("currentNoteId") || "";
        displayValue();
      });
    });
    textArea.style.display = "block";
  }
}
displayNotesSidebar();

function updateNote(input) {
  let currentNote = noteStorage.find((note) => note.id === currentNoteId);

  currentNote.input = input;
  localStorage.setItem("notes", JSON.stringify(noteStorage));
}

function displayValue() {
  let currentNoteInput = noteStorage.find(
    (note) => note.id === currentNoteId,
  ).input;

  textArea.value = currentNoteInput;
}

btn.addEventListener("click", () => {
  createNote();
  displayNotesSidebar();
});

textArea.addEventListener("input", () => {
  updateNote(textArea.value);
});
// localStorage.clear();