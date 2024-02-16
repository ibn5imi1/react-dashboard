import { faChartSimple, faDiagramProject, faFile, faGear, faGraduationCap, faMap, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../css/SideBar.css";
import { useEffect, useState } from "react";

export default function SideBar(){
    const [name, setName] = useState(getInitialName());
    const [activeLink, setActiveLink] = useState("");
    function getInitialName() {
        return window.innerWidth < 767 ? "Ibnshimi" : "Mohammed Ahmed";
    };
    useEffect(() => {
        const handleScreenSizeChange = () => {
        setName(getInitialName());
    };
    window.addEventListener("resize", handleScreenSizeChange);
        return () => window.removeEventListener("resize", handleScreenSizeChange);
    }, []); 
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    return (
        <div className="sidebar bg-white p-20 p-relative">
            <h3 className="p-relative mt-0 txt-c c-black">{name}</h3>
            <ul>
                <li>
                    <Link className={`link d-flex align-center fs-14
                    c-black rad-6 p-10 main-tran
                    ${activeLink === "dashboard" ? "active" : ""}`}
                    to={'./dashboard'}
                    onClick={() => handleLinkClick("dashboard")}>
                        <FontAwesomeIcon icon={faChartSimple} />
                        <span className="fs-14 ml-10">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link className={`link d-flex align-center fs-14
                    c-black rad-6 p-10 main-tran
                    ${activeLink === "settings" ? "active" : ""}`}
                    to={'./settings'}
                    onClick={() => handleLinkClick("settings")}>
                        <FontAwesomeIcon icon={faGear} />
                        <span className="fs-14 ml-10">Settings</span>
                    </Link>
                </li>
                <li>
                    <Link className={`link d-flex align-center fs-14
                    c-black rad-6 p-10 main-tran
                    ${activeLink === "profile" ? "active" : ""}`}
                    to={'./profile'}
                    onClick={() => handleLinkClick("profile")}>
                        <FontAwesomeIcon icon={faUser} />
                        <span className="fs-14 ml-10">Profile</span>
                    </Link>
                </li>
                <li>
                    <Link className={`link d-flex align-center fs-14
                    c-black rad-6 p-10 main-tran
                    ${activeLink === "projects" ? "active" : ""}`}
                    to={'./projects'}
                    onClick={() => handleLinkClick("projects")}>
                        <FontAwesomeIcon icon={faDiagramProject} />
                        <span className="fs-14 ml-10">Projects</span>
                    </Link>
                </li>
                <li>
                    <Link className={`link d-flex align-center fs-14
                    c-black rad-6 p-10 main-tran
                    ${activeLink === "course" ? "active" : ""}`}
                    to={'./courses'}
                    onClick={() => handleLinkClick("courses")}>
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <span className="fs-14 ml-10">Courses</span>
                    </Link>
                </li>
                <li>
                    <Link className="link d-flex align-center fs-14
                    c-black rad-6 p-10 main-tran"
                    to={'./friends'}
                    onClick={() => handleLinkClick("friends")}>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <span className="fs-14 ml-10">Friends</span>
                    </Link>
                </li>
                <li>
                    <Link className="link d-flex align-center fs-14
                    c-black rad-6 p-10 main-tran"
                    to={'./files'}
                    onClick={() => handleLinkClick("files")}>
                        <FontAwesomeIcon icon={faFile} />
                        <span className="fs-14 ml-10">Files</span>
                    </Link>
                </li>
                <li>
                    <Link className="link d-flex align-center fs-14
                    c-black rad-6 p-10 main-tran"
                    to={'./plans'}
                    onClick={() => handleLinkClick("plans")}>
                        <FontAwesomeIcon icon={faMap} />
                        <span className="fs-14 ml-10">Plans</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

