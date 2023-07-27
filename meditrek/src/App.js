import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Bot from "./components/Bot/Bot";
import Home from "./container/Home/Home";
import MyDocs from "./container/MyDocs/MyDocs";
import Login from "./container/Login/Login";
import Register from "./container/Register/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner/Spinner";
import { useState } from "react";
import AppointmentForm from "./container/AppointmentForm/AppointmentForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { set } from "date-fns";
import AppointmentDashboard from "./container/AppointmentDashboard/AppointmentDashboard";

function App() {
const [state, setstate] = useState(false);
  const { loading } = useSelector((state) => state.alerts);
  return (
    <React.Fragment>
      <Router>
        {loading ?(<Spinner/>):( <React.Fragment> <Navbar state={state} setstate={setstate} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/signin" element={<SignIn />} /> */}
          <Route path="/appointment" element={<AppointmentForm />} />
          <Route path="/bot" element={<Bot/>}/>
          <Route path="/appointmentdash" element={<AppointmentDashboard/>}/>
          <Route path="/login" element={<Login state={state} setstate={setstate} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/healthreport" element={<MyDocs />} />
        </Routes>
        </React.Fragment>)}

      </Router>
    </React.Fragment>
  );
}

export default App;
