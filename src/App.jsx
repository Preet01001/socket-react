import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./Home"
import Room from "./Room"
import Dash from "./Dash"
function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/room" element={<Room/>}/>
        <Route path="/dash" element={<Dash/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
