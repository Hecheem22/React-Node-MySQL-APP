import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbarr from './components/Navbar'
 import UserList from "./components/Users/UserList";
 import AddUser from "./components/Users/AddUser";
 import EditUser from "./components/Users/EditUser";
 


function App() {
  return (
    <BrowserRouter>
    <Navbarr/>
      <Routes >
        <Route path="/" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
