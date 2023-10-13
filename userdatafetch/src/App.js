
import Home from "./Components/Home";
import Userdetails from "./Components/Userdetails";
import {BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

    return ( 
        <BrowserRouter>

        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/userdetails/:id" element={<Userdetails/>}/>

          </Routes>
        </div>
        </BrowserRouter>
     );
}

export default App;
