import { Home } from "./Component/Home/Home";
import { Login } from "./Component/auth/Login";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import { ChatBox } from "./Component/ChatBox/ChatBox";
import {NotFound} from "./Component/NotFound/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="rooms/:docID" element= {<ChatBox/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
