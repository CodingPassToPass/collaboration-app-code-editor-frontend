import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditorPage from "./pages/EditorPage";
import PlayGame from "./component/playGame";
import NotFound from "./component/NotFound/NotFound";

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/editor/:id" element={<EditorPage/>} />
        <Route path="/play" element={<play/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
