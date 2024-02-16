import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Components/Header"
import "../css/Profile.css"
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ToggleSwitch from "../Components/ToggleSwitch";
export default function Profile() {
    document.title = "Profile";
    return(
        <div className="profile w-full">
            <Header/>
            <h1 className="p-relative">Profile</h1>
            <div className="overview m-20 bg-white rad-10 d-flex align-center">
                {/* start avatar box */}
                <div className="avatar-box p-20 txt-c">
                    <img src={require("../images/avatar.png")} alt="here is image"
                    className="raf-half mb-10"/>
                    <h3 className="m-0">Mohammed Ahmed</h3>
                    <p className="c-gray mt-10">Level 20</p>
                    <div className="level rad-6 bg-eee p-relative">
                        <span className="rad-6" style={{width:"70%"}}></span>
                    </div>
                    <div className="rating mt-10 mb-10">
                        <FontAwesomeIcon icon={faStar} style={{color: "#f59e0b",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#f59e0b",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#f59e0b",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#f59e0b",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#f59e0b",}} />
                    </div>
                    <p className="c-gray m-0 fs-14">450</p>
                </div>
                {/* end avatar box */}

                {/* start info box */}
                <div className="info-box">
                    <div className="box p-20 d-flex align-center main-tran">
                        <h4 className="c-gray fs-15 m-0 w-full">General Information</h4>
                        <div className="fs-14">
                            <span className="c-gray">Full Name: </span>
                            <span>Mohammed Ahmed</span>
                        </div>
                        <div className="fs-14">
                            <span className="c-gray">Gender: </span>
                            <span>Male</span>
                        </div>
                        <div className="fs-14">
                            <span className="c-gray">Country: </span>
                            <span>Iraq</span>
                        </div>
                        <div className="fs-14">
                            <ToggleSwitch/>
                        </div>
                    </div>
                    <div className="box p-20 d-flex align-center main-tran">
                        <h4 className="c-gray fs-15 m-0 w-full">Personal Information</h4>
                        <div className="fs-14">
                            <span className="c-gray">Email: </span>
                            <span>1@gmail.com</span>
                        </div>
                        <div className="fs-14">
                            <span className="c-gray">Phone: </span>
                            <span>0123456789</span>
                        </div>
                        <div className="fs-14">
                            <span className="c-gray">Date Of Birth: </span>
                            <span>7/26/2001</span>
                        </div>
                        <div className="fs-14">
                            <ToggleSwitch/>
                        </div>
                    </div>
                    <div className="box p-20 d-flex align-center main-tran">
                        <h4 className="c-gray fs-15 m-0 w-full">Job Information</h4>
                        <div className="fs-14">
                            <span className="c-gray">Title: </span>
                            <span>Front End Developer</span>
                        </div>
                        <div className="fs-14">
                            <span className="c-gray">Programming Language: </span>
                            <span>JS</span>
                        </div>
                        <div className="fs-14">
                            <span className="c-gray">Years Of Experience: </span>
                            <span>2</span>
                        </div>
                        <div className="fs-14">
                            <ToggleSwitch/>
                        </div>
                    </div>
                    <div className="box p-20 d-flex align-center main-tran">
                        <h4 className="c-gray fs-15 m-0 w-full">Billing Information</h4>
                        <div className="fs-14">
                            <span className="c-gray">Payment Method: </span>
                            <span>Paypal</span>
                        </div>
                        <div className="fs-14">
                            <span className="c-gray">Email: </span>
                            <span>email@website.com</span>
                        </div>
                        <div className="fs-14">
                            <span className="c-gray">Subscription: </span>
                            <span>Monthly</span>
                        </div>
                        <div className="fs-14">
                            <ToggleSwitch/>
                        </div>
                    </div>
                </div>
                {/* end info box */}

            </div>

            <div className="other-data d-flex gap-20 m-20">
                    {/* start skills card box */}
                    <div className="skills-card main-box  mt-20">
                        <h2 className="mt-0 mb-10">My Skills</h2>
                        <p className="c-gray fs-14 mt-0 mb-20">Complete Skills List</p>
                        <ul className="m-0 txt-c-mobile">
                            <li> 
                                <span>HTML</span> 
                                <span>PugJS</span> 
                                <span>HAML</span> 
                            </li>
                            <li> 
                                <span>CSS</span> 
                                <span>SASS</span> 
                                <span>Stylus</span> 
                            </li>
                            <li> 
                                <span>JavaSCript</span> 
                                <span>TypeScript</span> 
                            </li>
                            <li> 
                                <span>VewJS</span> 
                                <span>ReactJS</span> 
                            </li>
                            <li> 
                                <span>Jest</span> 
                                <span>Jasmine</span> 
                            </li>
                            <li> 
                                <span>PHP</span> 
                                <span>Laravel</span> 
                            </li>
                            <li> 
                                <span>Python</span> 
                                <span>Django</span> 
                            </li>
                        </ul>
                    </div>
                    {/* end skills card box */}

                    {/* start activities card box */}
                    <div className="activities-card main-box  mt-20">
                        <h2 className="mt-0 mb-10">Latest Activities</h2>
                        <p className="c-gray fs-14 mt-0 mb-20">Latest Activities Done By The User</p>
                        <div className="activity d-flex align-center txt-c-mobile">
                            <img src={require("../images/activity-01.png")} alt="here is image"/>
                            <div className="info">
                                <span className="d-block mb-10">Store</span>
                                <span className="c-gray">Bought The Mastering Python Course</span>
                            </div>
                            <div className="date">
                                <span className="d-block mb-10">18:10</span>
                                <span className="c-gray">Yesterday</span>
                            </div>
                        </div>
                        <div className="activity d-flex align-center txt-c-mobile">
                            <img src={require("../images/activity-02.png")} alt="here is image"/>
                            <div className="info">
                                <span className="d-block mb-10">Academy</span>
                                <span className="c-gray">Got The PHP Certificate</span>
                            </div>
                            <div className="date">
                                <span className="d-block mb-10">16:05</span>
                                <span className="c-gray">Yesterday</span>
                            </div>
                        </div>
                        <div className="activity d-flex align-center txt-c-mobile">
                            <img src={require("../images/activity-03.png")} alt="here is image"/>
                            <div className="info">
                                <span className="d-block mb-10">Badges</span>
                                <span className="c-gray">Unlocked The 10 Skills Badge</span>
                            </div>
                            <div className="date">
                                <span className="d-block mb-10">18:05</span>
                                <span className="c-gray">Yesterday</span>
                            </div>
                        </div>
                        <div className="activity d-flex align-center txt-c-mobile">
                            <img src={require("../images/activity-01.png")} alt="here is image"/>
                            <div className="info">
                                <span className="d-block mb-10">Store</span>
                                <span className="c-gray">Bought The Typescript Course</span>
                            </div>
                            <div className="date">
                                <span className="d-block mb-10">12:05</span>
                                <span className="c-gray">Yesterday</span>
                            </div>
                        </div>
                    </div>
                    {/* end activities card box */}
                </div>
        </div>
    )
}