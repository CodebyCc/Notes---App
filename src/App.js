import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  const [jots, setJotter] = useState([]);

  function addNote(note) {
    setJotter((prevNotes) => {
      return [...prevNotes, note];
    });
    console.log(note);
  }

  function deleteNote(id) {
    setJotter((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {jots.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
