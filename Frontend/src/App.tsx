import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Button } from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/' element={<RegisterPage />} />
        <Route path='/share/:id' element={<SharedPage />} />
        <Route path="*" element={<Navigate to="/HomePage" />} />
      </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
