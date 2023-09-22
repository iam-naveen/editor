import { createEffect } from "solid-js";
import "./App.css";
import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";

function App() {
  createEffect(() => {
    new Editor({
      element: document.querySelector(".element")!,
      extensions: [StarterKit],
      content: "<p>Hello World!</p>",
    });
  });

  return (
    <div class="container">
      <div class="element"></div>
    </div>
  );
}

export default App;
