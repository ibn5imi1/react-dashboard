import { Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Settings";
import Profile from "./Pages/Profile";
import Projects from "./Pages/Projects";
import Courses from "./Pages/Courses";
import Friends from "./Pages/Friends";
import Files from "./Pages/Files";
import Plans from "./Pages/Plans";
import Home from "./Components/Home";



export default function App() {
  return (
    <div className="App">
      <div className="page d-flex">
        <SideBar/>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"dashboard"} element={<Dashboard/>}/>
          <Route path={"settings"} element={<Settings/>}/>
          <Route path={"profile"} element={<Profile/>}/>
          <Route path={"projects"} element={<Projects/>}/>
          <Route path={"courses"} element={<Courses/>}/>
          <Route path={"friends"} element={<Friends/>}/>
          <Route path={"files"} element={<Files/>}/>
          <Route path={"plans"} element={<Plans/>}/>
        </Routes>
      </div>
    </div>
  );
};
