const textArea = document.getElementById("text-area");
const btn = document.getElementById("btn");
const noteStorage = JSON.parse(localStorage.getItem("notes"));
const noteSidebar = document.querySelector(".notes-sidebar");
let currentNoteId = "";

function createNote() {
  let uniqueId = String(Date.now());
  currentNoteId = uniqueId;

  if (!noteStorage) {
    let notesArray = [];
    notesArray.push({
      id: uniqueId,
      input: "",
    });
    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  noteStorage.push({
    id: uniqueId,
    input: "",
  });
  localStorage.setItem("notes", JSON.stringify(noteStorage));
}

function displayNotes() {
  const sidebarH1 = noteSidebar.querySelector("h1");

  if (noteSidebar.classList.contains("no-notes")) {
    noteSidebar.classList.remove("no-notes");
    noteSidebar.removeChild(sidebarH1);
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
    });
  }

  textArea.style.display = "block";
}
displayNotes();

function updateNote(input) {
  let currentNote = noteStorage.find((note) => note.id === currentNoteId);
  currentNote.input = input;

  localStorage.setItem("notes", JSON.stringify(noteStorage));
  console.log(JSON.parse(localStorage.getItem("notes")));
}

btn.addEventListener("click", () => {
  noteSidebar.innerHTML = "";
  createNote();
  displayNotes();
  console.log(noteStorage);
});

textArea.addEventListener("input", () => updateNote(textArea.value));
