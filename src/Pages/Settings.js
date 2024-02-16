import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Components/Header";
import ToggleSwitch from "../Components/ToggleSwitch";
import "../css/Settings.css";
import { faServer } from "@fortawesome/free-solid-svg-icons";

export default function Settings() {
    document.title = "Settings"
    return(
        <div className="settings-page w-full">
            <Header/>
            <h1 className="p-relative">Settings</h1>
            <div className="settings m-20 d-grid gap-20">
                {/* start Site Control box */}
                <div className="site-control p-20 bg-white rad-10">
                    <h2 className="mt-0 mb-10">Site Control</h2>
                    <p className="mt-0 mb-20 c-gray fs-15">Control The Website If There Is Maintenance</p>
                    <div className="mb-15 between-flex">
                        <div>
                            <span>Website Control</span>
                            <p className="c-gray mt-5 mb-0 fs-13">Open/Close Website And Type The Reason</p>
                        </div>
                        <div>
                            <ToggleSwitch/>
                        </div>
                    </div>
                    <textarea placeholder="Close Message Content"
                    className="close-message b-none p-10 rad-6 d-block w-full border-ccc"></textarea>
                </div>
                {/* end Site Control box */}

                {/* start General Info box */}
                <div className="general-info p-20 bg-white rad-10">
                    <h2 className="mt-0 mb-10">General Info</h2>
                    <p className="mt-0 mb-20 c-gray fs-15">General Information About Your Account</p>
                    <div className="mb-15">
                        <label htmlFor="first"
                        className="fs-14 c-gray d-block mb-10">First Name</label>
                        <input 
                        id="first" 
                        type="text" 
                        className="b-none p-10 rad-6 d-block w-full border-ccc"/>
                    </div>
                    <div className="mb-15">
                        <label htmlFor="last"
                        className="fs-14 c-gray d-block mb-10">Last Name</label>
                        <input 
                        id="last" 
                        type="text" 
                        className="b-none p-10 rad-6 d-block w-full border-ccc"/>
                    </div>
                    <div className="mb-15">
                        <label htmlFor="email"
                        className="fs-14 c-gray d-block mb-10">Email</label>
                        <input 
                        id="email" 
                        disabled
                        value={"1@gmail.com"}
                        className="b-none p-10 rad-6 border-ccc"/>
                        <a href="" className="c-blue fs-15 ml-10 fw-bold">Change</a>
                    </div>
                </div>
                {/* end General Info box */}

                {/* start Security Info box */}
                <div className="security-info p-20 bg-white rad-10">
                    <h2 className="mt-0 mb-10">Security Info</h2>
                    <p className="mt-0 mb-20 c-gray fs-15">Security Information About Your Account</p>
                    <div className="security-box mb-15 pt-10 pb-10 between-flex">
                        <div>
                            <span>Password</span>
                            <p className="c-gray mt-5 mb-0 fs-13">Last Change On 25/10/2023</p>
                        </div>
                        <a href="" className="c-white p-10 fs-15 ml-10 fw-bold btn-shape bg-blue">Change</a>
                    </div>
                    <div className="security-box mb-15 pt-10 pb-10 between-flex">
                        <div>
                            <span>Two-Factor Authentication</span>
                            <p className="c-gray mt-5 mb-0 fs-13">Enable/Disable The Feature</p>
                        </div>
                        <ToggleSwitch/>
                    </div>
                    <div className="security-box mb-15 pt-10 pb-10 between-flex">
                        <div>
                            <span>Devices</span>
                            <p className="c-gray mt-5 mb-0 fs-13">Check The Login Devices List</p>
                        </div>
                        <a href="" className="bg-eee c-black btn-shape">Devices</a>
                    </div>
                </div>
                {/* end Security Info box */}

                {/* start Social Info box */}
                <div className="social-info p-20 rad-10">
                    <h2 className="mt-0 mb-10">Social Info</h2>
                    <p className="mt-0 mb-20 c-gray fs-15">Social Media Information</p>
                    <div className="d-flex align-center mb-20">
                        <img src={require("../images/twitter.png")}/>
                        <input 
                        type="text" 
                        placeholder="Twitter Username"
                        className="w-full pl-15"/>
                    </div>
                    <div className="d-flex align-center mb-20">
                        <img src={require("../images/facebook.png")}/>
                        <input 
                        type="text" 
                        placeholder="Facebook Username"
                        className="w-full pl-15"/>
                    </div>
                    <div className="d-flex align-center mb-20">
                        <img src={require("../images/linkedin.png")}/>
                        <input 
                        type="text" 
                        placeholder="Linkedin Username"
                        className="w-full pl-15"/>
                    </div>
                    <div className="d-flex align-center mb-20">
                        <img src={require("../images/youtube.png")}/>
                        <input 
                        type="text" 
                        placeholder="Youtube Username"
                        className="w-full pl-15"/>
                    </div>
                </div>
                {/* end Social Info box */}

                {/* start Widgets Control box */}
                <div className="widgets-control p-20 bg-white rad-10">
                    <h2 className="mt-0 mb-10">Widgets Control</h2>
                    <p className="mt-0 mb-20 c-gray fs-15">Show/Hide Widgets</p>
                    <div className="control d-flex align-center mb-15">
                        <input type="checkbox" id="one"/>
                        <label className="pointer p-relative" htmlFor="one">Quick Draft</label>
                    </div>
                    <div className="control d-flex align-center mb-15">
                        <input type="checkbox" id="two"/>
                        <label className="pointer p-relative" htmlFor="two">Yearly Targets</label>
                    </div>
                    <div className="control d-flex align-center mb-15">
                        <input type="checkbox" id="three"/>
                        <label className="pointer p-relative" htmlFor="three">Tickets Statistics</label>
                    </div>
                    <div className="control d-flex align-center mb-15">
                        <input type="checkbox" id="four"/>
                        <label className="pointer p-relative" htmlFor="four">Latest News</label>
                    </div>
                    <div className="control d-flex align-center mb-15">
                        <input type="checkbox" id="five"/>
                        <label className="pointer p-relative" htmlFor="five">Latest Tasks</label>
                    </div>
                    <div className="control d-flex align-center mb-15">
                        <input type="checkbox" id="six"/>
                        <label className="pointer p-relative" htmlFor="six">Top Search Items</label>
                    </div>
                </div>
                {/* end Widgets Control box */}

                {/* start Backup Manager box */}
                <div className="backup-manager p-20 bg-white rad-10">
                    <h2 className="mt-0 mb-10">Backup Manager</h2>
                    <p className="mt-0 mb-20 c-gray fs-15">Control Backup Time And Location</p>
                    <div className="date d-flex align-center mb-15">
                        <input type="radio" name="time" id="daily"/>
                        <label htmlFor="daily" className="pointer p-relative">Daily</label>
                    </div>
                    <div className="date d-flex align-center mb-15">
                        <input type="radio" name="time" id="weekly"/>
                        <label htmlFor="weekly" className="pointer p-relative">Weekly</label>
                    </div>
                    <div className="date d-flex align-center mb-15">
                        <input type="radio" name="time" id="monthly"/>
                        <label htmlFor="monthly" className="pointer p-relative">Monthly</label>
                    </div>
                    <div className="servers d-flex align-center txt-c pt-20">
                        <input type="radio" name="servers" id="server-one"/>
                        <div className="server mb-15 rad-10 w-full p-relative">
                            <label htmlFor="server-one" className="d-block m-15 pointer">
                                <FontAwesomeIcon icon={faServer} className="d-block mb-10 m-auto"/>
                                Megaman
                            </label>
                        </div>
                        <input type="radio" name="servers" id="server-two"/>
                        <div className="server mb-15 rad-10 w-full p-relative">
                            <label htmlFor="server-two" className="d-block m-15 pointer">
                                <FontAwesomeIcon icon={faServer} className="d-block mb-10 m-auto"/>
                                Zero
                            </label>
                        </div>
                        <input type="radio" name="servers" id="server-three"/>
                        <div className="server mb-15 rad-10 w-full p-relative">
                            <label htmlFor="server-three" className="d-block m-15 pointer">
                                <FontAwesomeIcon icon={faServer} className="d-block mb-10 m-auto"/>
                                Sigma
                            </label>
                        </div>
                    </div>
                </div>
                {/* end Backup Manager box */}
            </div>
        </div>
    )
}