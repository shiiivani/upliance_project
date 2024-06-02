import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Navbar from "./Navbar";

const RichTextEditor = () => {
  const [editorContent, setEditorContent] = useState("");

  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setEditorContent(savedContent);
    }
  }, []);

  const handleChange = (content) => {
    setEditorContent(content);
    localStorage.setItem("editorContent", content);
  };

  return (
    <div>
      <Navbar />
      <ReactQuill
        value={editorContent}
        onChange={handleChange}
        modules={{
          toolbar: [["bold", "italic", "underline"], [{ align: [] }]],
        }}
        formats={["bold", "italic", "underline", "align"]}
        style={{ height: "400px" }}
      />
    </div>
  );
};

export default RichTextEditor;
