import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Header.css";
export default function Header() {
    return(
        <div className="head bg-white p-15 between-flex">
            <div className="search p-relative c-gray">
                    <FontAwesomeIcon className="search-icon fs-14 pointer" 
                    icon={faMagnifyingGlass} />
                    <input className="p-10 main-tran" type="search" placeholder="type a keyword"/>
                </div>
                <div className="icon d-flex align-center">
                    <span className="notification p-relative">
                        <FontAwesomeIcon icon={faBell} className="bell pointer"/>
                    </span>
                    <img src={require("../images/avatar.png")} alt="here is photo" 
                    className="ml-10 pointer"/>
                </div>
        </div>
    )
}