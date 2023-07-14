import FileUpload from "./components/FileUpload";
import { Routes, Route, Router } from 'react-router-dom';
//import Navbar from './components/Navbar';
import Navbar1 from "./components/navbar1";
import Title from "./components/Title";
import Navbarpr from "./components/Navbarpr";
import { Carousel } from "bootstrap";
import Carousell from "./components/Carousell";
import Footer from "./components/Footer";
// import Pic from "./components/Pic";
import DragDropFile from "./components/DragDropFile"
import Here from "./components/Here";
import Trynow from "./components/Trynow";
import AboutUs from "./components/About";
import Login from "./components/Login";
import Logintoggle from "./components/Logintoggle";
import Instructionss from "./components/Instructionss";
import Frontsection from "./components/Frontsection";
import Submit from "./components/submit";
import GitCloneButton from "./components/GitCloneButton";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from "react";
import Signup from "./components/Signup";
// import DownloadButton from "./components/Download";
function App() {
  const [loginResult, setLoginResult] = useState(null);
  useEffect(() => {
    const storedLoginResult = localStorage.getItem("loginResult");
    if (storedLoginResult) {
      setLoginResult(JSON.parse(storedLoginResult));
    }
  }, []);
  const handleLogin = (result) => {
    setLoginResult(result);
    // Save loginResult to localStorage
    localStorage.setItem("loginResult", JSON.stringify(result));
  };
  const handleLogout = () => {
    setLoginResult(null);
    // Clear loginResult from localStorage
    localStorage.removeItem("loginResult");
    // navigate('/login');
  };
    if (loginResult && loginResult.message) {
  return (
    <div>
    <Routes>
      <Route path="/" element={<> <Navbarpr user={loginResult} handleLogout={handleLogout} /> <Title />  <Frontsection/><Trynow/> <Footer /></>} />
      <Route path="/signup" element={<> <Navbarpr user={loginResult} handleLogout={handleLogout} /> <Signup/> <Footer /></>} />
      <Route path="/scan" element={<> <Navbarpr user={loginResult} handleLogout={handleLogout} /> <Title /> <Here/> <FileUpload user={loginResult}/>  <Footer /> </>} />
      <Route path="/about" element={<> <Navbarpr user={loginResult} handleLogout={handleLogout} /> <Title />  <AboutUs/> <Footer /> </>} />
      <Route path="/description" element={<> <Navbarpr user={loginResult} handleLogout={handleLogout} /> <Title /> <Instructionss/> <Footer /> </>} />
      {/* <Route path="/submit" element={<> <Navbarpr /> <Title /> <Submit/><Trynow/> <Footer /> </>} />
       */}
       <Route
          path="/submit"
          element={<> <Navbarpr /> <Title /> <Submit/><Trynow/> <Footer /> </>}
          render={({ location }) => <Submit res={location.state} />}
        />
      {/* <Route path="/login" element={<> <Navbarpr /> <Title />   <Footer /> </>} /> */}
    </Routes>
    </div>
  );
}else{
  return (
    <div>
    <Routes>
      <Route path="/" element={<> <Navbarpr /> <Title />  <Frontsection/><Trynow/> <Footer /></>} />
      <Route path="/signup" element={<> <Navbarpr /> <Signup handlelogin={handleLogin}/> <Footer /></>} />
      <Route path="/scan" element={<> <Navbarpr /> <Title /> <Here/> <FileUpload/>  <Footer /> </>} />
      <Route path="/about" element={<> <Navbarpr /> <Title />  <AboutUs/> <Footer /> </>} />
      <Route path="/description" element={<> <Navbarpr /> <Title /> <Instructionss/> <Footer /> </>} />
      <Route path="/Git" element={<> <Navbarpr /> <Title /> <GitCloneButton/> <Footer /> </>} />
      {/* <Route path="/submit" element={<> <Navbarpr /> <Title /> <Submit/><Trynow/> <Footer /> </>} />
       */}
       <Route
          path="/submit"
          element={<> <Navbarpr /> <Title /> <Submit/><Trynow/> <Footer /> </>}
          render={({ location }) => <Submit res={location.state} />}
        />
      {/* <Route path="/login" element={<> <Navbarpr /> <Title />   <Footer /> </>} /> */}
    </Routes>
    </div>
  );
}
}

export default App;
