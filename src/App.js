import './App.css';
import SingIn from "./pages/singIn/singIn";
import {Route, Routes} from "react-router-dom";
import Registration from "./pages/registration/registration";

function App() {
  return (
    <div className="App">
       <Routes>
           <Route path='/' element={<SingIn />}></Route>
           <Route path='/registration' element={<Registration />}></Route>
       </Routes>
    </div>
  );
}

export default App;
