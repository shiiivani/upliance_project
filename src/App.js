import Counter from "./components/Counter";
import "./App.css";
import Form from "./components/Form";
import RichTextEditor from "./components/RichTextEditor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/form" element={<Form />} />
        <Route path="/textEditor" element={<RichTextEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
