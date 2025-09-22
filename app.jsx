import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import StudentsList from "./components/StudentsList";
import CoursesList from "./components/CoursesList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/courses" element={<CoursesList />} />
      </Routes>
    </Router>
  );
}

export default App;
