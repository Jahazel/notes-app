const textArea = document.getElementById("text-area");
const btn = document.getElementById("btn");
const noteSidebar = document.querySelector(".notes-sidebar");
const deleteBtn = document.getElementById("delete-btn");
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
    let arrayCopy = [...noteStorage].reverse();

    arrayCopy.forEach(({ id, input }) => {
      const noteDiv = document.createElement("div");
      const pElement = document.createElement("p");
      noteSidebar.appendChild(noteDiv);
      noteDiv.appendChild(pElement);
      noteDiv.classList.add("note-div");
      pElement.textContent = "New Note";
      noteDiv.id = id;

      if (currentNoteId === id) {
        noteDiv.classList.add("active");
        textArea.value = input;
      }

      noteDiv.addEventListener("click", () => {
        localStorage.setItem("currentNoteId", noteDiv.id);
        currentNoteId = localStorage.getItem("currentNoteId") || "";

        document.querySelectorAll(".note-div").forEach((div) => {
          if (div.classList.contains("active")) {
            div.classList.remove("active");
          }
        });

        noteDiv.classList.add("active");
        displayValue();
      });
    });
  }
  if (noteStorage.length === 0) {
    const h1Element = document.createElement("h1");

    noteSidebar.classList.add("no-notes");
    h1Element.textContent = "No Notes";
    noteSidebar.appendChild(h1Element);
    textArea.style.display = "none";
  } else {
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

function deleteNote() {
  let indexTodelete = noteStorage.findIndex(({ id }) => id === currentNoteId);
  let divToDelete = document.getElementById(currentNoteId);

  if (noteStorage.length != 0) {
    noteStorage.splice(indexTodelete, 1);
    localStorage.setItem("notes", JSON.stringify(noteStorage));
    divToDelete.remove();
  }

  if (noteStorage.length === 0) {
    if (!noteSidebar.classList.contains("no-notes")) {
      const h1Element = document.createElement("h1");

      noteSidebar.classList.add("no-notes");
      h1Element.textContent = "No Notes";
      noteSidebar.appendChild(h1Element);
    }

    textArea.style.display = "none";
  } else if (noteStorage.length >= 1) {
    textArea.value = noteStorage[noteStorage.length - 1].input;
    currentNoteId = noteStorage[noteStorage.length - 1].id;
    displayNotesSidebar();
  }
}

btn.addEventListener("click", () => {
  createNote();
  displayNotesSidebar();
});

textArea.addEventListener("input", () => {
  updateNote(textArea.value);
});

deleteBtn.addEventListener("click", () => {
  deleteNote();
});
// localStorage.clear();
