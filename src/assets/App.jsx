import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Users from "./Components/Users";
import AddUserForm from "./Components/AddUserForm";
import EditUserForm from "./Components/EditUserForm";
import SingleUserProfile from "./Components/SingleUserProfile";

function App() {
  return (
    <>
      {/* Navigating one element to another element using react-router-dom */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addUser" element={<AddUserForm />} />
          <Route path="/editUser/:id" element={<EditUserForm />} />
          <Route path="/userProfile/:id" element={<SingleUserProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
