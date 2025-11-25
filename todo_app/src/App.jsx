import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./Components/TaskList";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<TaskList />} />
      </Routes>
    </Router>
  );
}

export default App;
