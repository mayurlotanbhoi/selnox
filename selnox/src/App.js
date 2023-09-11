import logo from './logo.svg';
import './App.css';
import AddEmp from './Pages/Add-Empl/Add-emp';
import EmpList from './Pages/Emp-List/Emp-list';
import { createContext, useState } from 'react';
import data from './Data/EmplData';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


export const EmployeeContest = createContext()

function App() {

  const [Empl, setEmpl] = useState(data)
  return (
    <EmployeeContest.Provider value={{ Empl, setEmpl }}>
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AddEmp />} />
            <Route path="/Emp-list" element={<EmpList />} />
          </Routes>
        </BrowserRouter>


      </div>
    </EmployeeContest.Provider>

  );
}

export default App;


