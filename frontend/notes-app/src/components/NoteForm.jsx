import { useState } from "react";
import { useCreateNote } from "../hooks/useCreateNote";
import { jwtDecode } from "jwt-decode";

const NoteForm = () => {
  const { createNote, loading, error } = useCreateNote();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = jwtDecode(user.token)._id;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newNote = await createNote(title, content, userId);

    if (newNote) {
      setTitle("");
      setContent("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>New Note</h1>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title here"
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter content"
            required
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          submit
        </button>
      </form>
    </>
  );
};

export default NoteForm;
