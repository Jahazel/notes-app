import { useState } from "react";
import { useCreateNote } from "../hooks/useCreateNote";
import { jwtDecode } from "jwt-decode";

const NoteView = () => {
  const { createNote, loading, error } = useCreateNote();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = jwtDecode(user.token)._id;
  const noteTitle = title.trim() === "" ? "New Note" : title;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newNote = await createNote(noteTitle, content, userId);

    if (newNote) {
      setTitle("");
      setContent("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full bg-blue-500">
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title here"
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter content"
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          submit
        </button>
      </form>
    </>
  );
};

export default NoteView;
