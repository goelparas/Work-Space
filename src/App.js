import { Header } from "./Component/Header/Header";
import { Sidebar } from "./Component/Sidebar/Sidebar";
import { Chat } from "./Component/Chat/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App w-screen h-full">
      <Router>
        <Header />
        <div className="flex  h-full">
          <Sidebar />
          <Routes>
          <Route path="/rooms/:docID"   element={<Chat />} >
          </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
