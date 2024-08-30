import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/Employees/Employees";
import EmployeeEdit from "./components/Employees/EmployeeEdit";
import EmployeeAdd from "./components/Employees/EmployeeAdd";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<EmployeeList />} />
          <Route path="/edit/:id" element={<EmployeeEdit />} />
          <Route path="/new" element={<EmployeeAdd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
