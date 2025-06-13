import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Shared from "./pages/Shared";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/HomePage' element={<Home />} />
        <Route path='/' element={<Register />} />
        <Route path='/share/:id' element={<Shared />} />
        <Route path="*" element={<Navigate to="/HomePage" />} />
      </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
