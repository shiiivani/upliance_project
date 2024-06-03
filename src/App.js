import Counter from "./components/Counter";
import "./App.css";
import Form from "./components/Form";
import RichTextEditor from "./components/RichTextEditor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/upliance_project/" element={<Counter />} />
        <Route path="/upliance_project/form" element={<Form />} />
        <Route
          path="/upliance_project/textEditor"
          element={<RichTextEditor />}
        />
      </Routes>
    </Router>
  );
}

export default App;
