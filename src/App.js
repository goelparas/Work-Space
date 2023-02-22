import { Home } from "./Component/Home/Home";
import { Login } from "./Component/Auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Chatbox } from "./Component/Chatbox/Chatbox";
import {NotFound} from "./Component/Notfound/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="rooms/:docID" element= {<Chatbox/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
