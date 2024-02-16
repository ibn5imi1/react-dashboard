import { faCircleCheck, faCode, faComment, faDollarSign, faHeart, faRectangleList, faRectangleXmark, faSpinner, faTrashCan, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Components/Header";
import "../css/Dashboard.css";
import { Link } from "react-router-dom";


export default function Dashboard() {
    document.title = "Dashboard"
    return(
        <div className="dashboard w-full">
            <Header/>
            <h1 className="p-relative">Dashboard</h1>
            <div className="wrapper d-grid gap-20 ml-20 mr-20">
                {/* start welcome box */}
                <div className="welcome bg-white rad-6 block-mobile">
                    <div className="intro p-20 d-flex space-between bg-eee">
                        <div>
                            <h2 className="m-0">Welcome</h2>
                            <p className="c-gray mt-5 fs-15">Mohammed</p>
                        </div>
                        <img src={require("../images/welcome.png")} alt="here is image" className="hide-mobile"/>
                    </div>
                    <img src={require("../images/avatar.png")} alt="here is image" className="avatar rad-half"/>
                    <div className="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
                        <div>Mohammed Ahmed <span className="d-block c-gray fs-14 mt-10">Developer</span></div>
                        <div>10 <span className="d-block c-gray fs-14 mt-10">Projects</span></div>
                        <div>$2400 <span className="d-block c-gray fs-14 mt-10">Earned</span></div>
                    </div>
                    <Link to={'./profile'}
                    className="visit d-block fs-14 rad-6 bg-blue c-white w-fit main-tran btn-shape">
                        Profile
                    </Link>
                </div>
                {/* end welcome box */}

                {/* start Quick Draft box */}
                <div className="quick-draft p-20 bg-white rad-10">
                    <h2 className="mt-0 mb-10">General Info</h2>
                    <p className="mt-0 mb-20 c-gray fs-15">Write A Draft For Your Ideas</p>
                    <form>
                        <input className="d-block mb-20 w-full p-10 b-none bg-eee rad-6"
                        type="text" placeholder="title"/>
                        <textarea className="d-block mb-20 w-full p-10 b-none bg-eee rad-6"
                        placeholder="Your Thought"/>
                        <input className="save d-block fs-14 bg-blue c-white b-none w-fit btn-shape
                        pointer main-tran"
                        type="submit" value={"save"}/>
                    </form>
                </div>
                {/* end Quick Draft box */}

                {/* start yearly targets box */}
                <div className="targets p-20 bg-white rag-10">
                    <h2 className="mt-0 mb-10">Yearly Targets</h2>
                    <p className="mt-0 mb-20 c-gray fs-15">Targets Of The Year</p>
                    <div className="target-row money mb-20 d-flex align-center">
                        <div className="icon center-flex">
                            <FontAwesomeIcon icon={faDollarSign} className="c-blue"/>
                        </div>
                        <div className="details">
                            <span className="fs-14 c-gray">Money</span>
                            <span className="d-block mt-5 mb-10 fw-bold">$20,000</span>
                            <div className="progress p-relative">
                                <span className="money bg-blue" style={{width:"80%"}}>
                                    <span className="bg-blue c-white rad-6 fs-14">80%</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="target-row project mb-20 d-flex align-center">
                        <div className="icon center-flex">
                            <FontAwesomeIcon icon={faCode} className="c-orange"/>
                        </div>
                        <div className="details">
                            <span className="fs-14 c-gray">Projects</span>
                            <span className="d-block mt-5 mb-10 fw-bold">24</span>
                            <div className="progress p-relative">
                                <span className="projects bg-orange" style={{width:"55%"}}>
                                    <span className="bg-orange c-white rad-6 fs-14">55%</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="target-row team mb-20 d-flex align-center">
                        <div className="icon center-flex">
                            <FontAwesomeIcon icon={faUserPlus} className="c-green"/>
                        </div>
                        <div className="details">
                            <span className="fs-14 c-gray">Team</span>
                            <span className="d-block mt-5 mb-10 fw-bold">12</span>
                            <div className="progress p-relative">
                                <span className="team bg-green" style={{width:"75%"}}>
                                    <span className="bg-green c-white rad-6 fs-14">75%</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end yearly targets box */}

                {/* start Tickets Statistics box */}
                <div className="tickets main-box ">
                    <h2 className="mt-0 mb-10">Tickets Statistics</h2>
                    <p className="mt-0 mb-20 c-gray fs-15">Everything About Support Tickets</p>
                    <div className="d-flex txt-c gap-20 f-wrap">
                        <div className="box p-20 rad-10 fs-14 c-gray">
                            <FontAwesomeIcon icon={faRectangleList} className="fa-2x c-orange"/>
                            <span className="d-block c-black fw-bold fs-25 mb-5">2500</span>
                            Total
                        </div>
                        <div className="box p-20 rad-10 fs-14 c-gray">
                            <FontAwesomeIcon icon={faSpinner} className="fa-2x c-blue"/>
                            <span className="d-block c-black fw-bold fs-25 mb-5">500</span>
                            Pending
                        </div>
                        <div className="box p-20 rad-10 fs-14 c-gray">
                            <FontAwesomeIcon icon={faCircleCheck} className="fa-2x c-green"/>
                            <span className="d-block c-black fw-bold fs-25 mb-5">1900</span>
                            Closed
                        </div>
                        <div className="box p-20 rad-10 fs-14 c-gray">
                            <FontAwesomeIcon icon={faRectangleXmark} className="fa-2x c-red"/>
                            <span className="d-block c-black fw-bold fs-25 mb-5">100</span>
                            Deleted
                        </div>
                    </div>
                </div>
                {/* end Tickets Statistics box */}

                {/* start Latest News box */}
                <div className="latest-news main-box  txt-c-mobile">
                    <h2 className="mt-0 mb-20">Latest News</h2>
                    <div className="news-row d-flex align-center block-mobile">
                        <img src={require("../images/news-01.png")} alt="here is image"
                        className="rad-6 mr-15"/>
                        <div className="info">
                            <h3 className="fs-15">Created SASS Section</h3>
                            <p className="m-0 fs-14 c-gray">New SASS Examples & Tutorials</p>
                        </div>
                        <div className="label btn-shape bg-eee fs-14">
                            3 Days Ago
                        </div>
                    </div>
                    <div className="news-row d-flex align-center block-mobile">
                        <img src={require("../images/news-02.png")} alt="here is image"
                        className="rad-6 mr-15"/>
                        <div className="info">
                            <h3 className="fs-15">Changed The Design</h3>
                            <p className="m-0 fs-14 c-gray">A Brand New Website Design</p>
                        </div>
                        <div className="label btn-shape bg-eee fs-14">
                            5 Days Ago
                        </div>
                    </div>
                    <div className="news-row d-flex align-center block-mobile">
                        <img src={require("../images/news-03.png")} alt="here is image"
                        className="rad-6 mr-15"/>
                        <div className="info">
                            <h3 className="fs-15">Team Increased</h3>
                            <p className="m-0 fs-14 c-gray">3 Developers Joined The Team</p>
                        </div>
                        <div className="label btn-shape bg-eee fs-14">
                            7 Days Ago
                        </div>
                    </div>
                    <div className="news-row d-flex align-center block-mobile">
                        <img src={require("../images/news-04.png")} alt="here is image"
                        className="rad-6 mr-15"/>
                        <div className="info">
                            <h3 className="fs-15">Added Payment Gateway</h3>
                            <p className="m-0 fs-14 c-gray">Many New Payment Gateways Added</p>
                        </div>
                        <div className="label btn-shape bg-eee fs-14">
                            9 Days Ago
                        </div>
                    </div>
                </div>
                {/* end Latest News box */}

                {/* start Latest Tasks box */}
                <div className="tasks main-box">
                    <h2 className="mt-0 mb-20">Latest Tasks</h2>
                    <div className="task-row between-flex">
                        <div className="info">
                            <h3 className="mt-0 mb-5 fs-15">Record One New Video</h3>
                            <p className="m-0 c-gray">Record Python Create Exe Project</p>
                        </div>
                        <FontAwesomeIcon icon={faTrashCan} className="delete pointer main-tran"/>
                    </div>
                    <div className="task-row between-flex">
                        <div className="info">
                            <h3 className="mt-0 mb-5 fs-15">Write Article</h3>
                            <p className="m-0 c-gray">Write Low Level vs High Level Languages</p>
                        </div>
                        <FontAwesomeIcon icon={faTrashCan} className="delete pointer main-tran"/>
                    </div>
                    <div className="task-row between-flex">
                        <div className="info">
                            <h3 className="mt-0 mb-5 fs-15">Finish Project</h3>
                            <p className="m-0 c-gray">Publish Academy Programming Project</p>
                        </div>
                        <FontAwesomeIcon icon={faTrashCan} className="delete pointer main-tran"/>
                    </div>
                    <div className="task-row between-flex done">
                        <div className="info">
                            <h3 className="mt-0 mb-5 fs-15">Attend The Meeting</h3>
                            <p className="m-0 c-gray">Attend The Project Business Analysis Meeting</p>
                        </div>
                        <FontAwesomeIcon icon={faTrashCan} className="delete pointer main-tran"/>
                    </div>
                    <div className="task-row between-flex">
                        <div className="info">
                            <h3 className="mt-0 mb-5 fs-15">Finish Lesson</h3>
                            <p className="m-0 c-gray">Finish Teaching Flex Box</p>
                        </div>
                        <FontAwesomeIcon icon={faTrashCan} className="delete pointer main-tran"/>
                    </div>
                </div>
                {/* end Latest Tasks box */}

                {/* start Top Search Items box */}
                <div className="search-item main-box">
                    <h2 className="mt-0 mb-20">Top Search Items</h2>
                    <div className="items-head d-flex space-between c-gray mb-10">
                        <div>Keyword</div>
                        <div>Search Count</div>
                    </div>
                    <div className="items d-flex space-between pt-15 pb-15">
                        <span>Programming</span>
                        <span className="bg-eee fs-14 btn-shape">220</span>
                    </div>
                    <div className="items d-flex space-between pt-15 pb-15">
                        <span>JavaScript</span>
                        <span className="bg-eee fs-14 btn-shape">180</span>
                    </div>
                    <div className="items d-flex space-between pt-15 pb-15">
                        <span>PHP</span>
                        <span className="bg-eee fs-14 btn-shape">160</span>
                    </div>
                    <div className="items d-flex space-between pt-15 pb-15">
                        <span>Code</span>
                        <span className="bg-eee fs-14 btn-shape">145</span>
                    </div>
                    <div className="items d-flex space-between pt-15 pb-15">
                        <span>Design</span>
                        <span className="bg-eee fs-14 btn-shape">110</span>
                    </div>
                    <div className="items d-flex space-between pt-15 pb-15">
                        <span>Logic</span>
                        <span className="bg-eee fs-14 btn-shape">95</span>
                    </div>
                </div>
                {/* end Top Search Items box */}
                
                {/* start Latest Uploads box */}
                <div className="latest-uploads main-box">
                    <h2 className="mt-0 mb-20">Latest Uploads</h2>
                    <ul className="m-0">
                        <li className="between-flex pb-10 mb-10">
                            <div className="d-flex align-center">
                                <img src={require("../images/pdf.png")} alt="here is image"
                                className="mr-10"/>
                                <div className="">
                                    <span className="d-block">my-file.pdf</span>
                                    <span className="fs-15 c-gray">Elzero</span>
                                </div>
                            </div>
                            <div className="bg-eee btn-shape fs-14">2.9mb</div>
                        </li>
                        <li className="between-flex pb-10 mb-10">
                            <div className="d-flex align-center">
                                <img src={require("../images/avi.png")} alt="here is image"
                                className="mr-10"/>
                                <div className="">
                                    <span className="d-block">My-Video-File.avi</span>
                                    <span className="fs-15 c-gray">Admin</span>
                                </div>
                            </div>
                            <div className="bg-eee btn-shape fs-14">4.9mb</div>
                        </li>
                        <li className="between-flex pb-10 mb-10">
                            <div className="d-flex align-center">
                                <img src={require("../images/psd.png")} alt="here is image"
                                className="mr-10"/>
                                <div className="">
                                    <span className="d-block">My-Psd-File.pdf</span>
                                    <span className="fs-15 c-gray">Osama</span>
                                </div>
                            </div>
                            <div className="bg-eee btn-shape fs-14">4.5mb</div>
                        </li>
                        <li className="between-flex pb-10 mb-10">
                            <div className="d-flex align-center">
                                <img src={require("../images/zip.png")} alt="here is image"
                                className="mr-10"/>
                                <div className="">
                                    <span className="d-block">My-Zip-File.pdf</span>
                                    <span className="fs-15 c-gray">User</span>
                                </div>
                            </div>
                            <div className="bg-eee btn-shape fs-14">8.9mb</div>
                        </li>
                        <li className="between-flex pb-10 mb-10">
                            <div className="d-flex align-center">
                                <img src={require("../images/dll.png")} alt="here is image"
                                className="mr-10"/>
                                <div className="">
                                    <span className="d-block">My-DLL-File.pdf</span>
                                    <span className="fs-15 c-gray">Admin</span>
                                </div>
                            </div>
                            <div className="bg-eee btn-shape fs-14">4.9mb</div>
                        </li>
                        <li className="between-flex pb-10 mb-10">
                            <div className="d-flex align-center">
                                <img src={require("../images/eps.png")} alt="here is image"
                                className="mr-10"/>
                                <div className="">
                                    <span className="d-block">My-Eps-File.pdf</span>
                                    <span className="fs-15 c-gray">Designer</span>
                                </div>
                            </div>
                            <div className="bg-eee btn-shape fs-14">8.9mb</div>
                        </li>
                    </ul>
                </div>
                {/* end Latest Uploads box */}

                {/* start Last Project Progress box */}
                <div className="last-project p-20 main-box p-relative">
                    <h2 className="mt-0 mb-20">Last Project Progress</h2>
                    <ul className="m-0 p-relative">
                        <li className="mt-25 d-flex align-center done">Got The Project</li>
                        <li className="mt-25 d-flex align-center done">Started The Project</li>
                        <li className="mt-25 d-flex align-center done">The Project About To Finish</li>
                        <li className="mt-25 d-flex align-center current">Test The Project</li>
                        <li className="mt-25 d-flex align-center">Finish The Project & Get Money</li>
                    </ul>
                    <img src={require("../images/project.png")} alt="here is image" 
                    className="launch-icon hide-mobile"/>
                </div>
                {/* end Last Project Progress box */}

                {/* start Reminders box */}
                <div className="reminders main-box">
                    <h2 className="mt-0 mb-25">Reminders</h2>
                    <ul className="m-0">
                        <li className="d-flex align-center mt-20">
                            <span className="key bg-blue  mr-15 d-block rad-half"></span>
                            <div className="pl-15 blue">
                                <p className="fs-15 fw-bold mt-0 mb-5">Check My Tasks List</p>
                                <span className="fs-14 c-gray">28/09/2024 - 12:00am</span>
                            </div>
                        </li>
                        <li className="d-flex align-center mt-20">
                            <span className="key bg-green  mr-15 d-block rad-half"></span>
                            <div className="pl-15 green">
                                <p className="fs-15 fw-bold mt-0 mb-5">Check My Projects</p>
                                <span className="fs-14 c-gray">26/10/2024 - 12:00am</span>
                            </div>
                        </li>
                        <li className="d-flex align-center mt-20">
                            <span className="key bg-orange  mr-15 d-block rad-half"></span>
                            <div className="pl-15 orange">
                                <p className="fs-15 fw-bold mt-0 mb-5">Call All My Clients</p>
                                <span className="fs-14 c-gray">05/11/2022 - 12:00am</span>
                            </div>
                        </li>
                        <li className="d-flex align-center mt-20">
                            <span className="key bg-red  mr-15 d-block rad-half"></span>
                            <div className="pl-15 red">
                                <p className="fs-15 fw-bold mt-0 mb-5">Finish The Development Workshop</p>
                                <span className="fs-14 c-gray">20/12/2024 - 12:00am</span>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* end Reminders box */}

                {/* start Latest Post box */}
                <div className="latest-post main-box">
                    <h2 className="mt-0 mb-25">Latest Post</h2>
                    <div className="top d-flex align-center">
                        <img src={require("../images/avatar.png")} alt="here is image"
                        className="avatar mr-15"/>
                        <div className="info">
                            <span className="d-block mb-5 fw-bold">Mohammed Ahmed</span>
                            <span className="c-gray">About 3 Hours Ago</span>
                        </div>
                    </div>
                    <div className="post-content txt-c-mobile pt-20 pb-20 mt-20 mb-20">
                        You Can Fool All Of The People Some Of The Time, And Some Of The People All Of The Time,
                        But You Can't Fool All Of The People All Of The Time.
                    </div>
                    <div className="post-stats between-flex c-gray">
                        <div>
                            <FontAwesomeIcon icon={faHeart} className="mr-10"/>
                            <span>1.8k</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faComment} className="mr-10"/> 
                            <span>500</span>
                        </div>
                    </div>
                </div>
                {/* end Latest Post box */}

                {/* start Social Media box */}
                <div className="social-media p-20 rad-10">
                    <h2 className="mt-0 mb-25">Social Media Stats</h2>
                    <div className="box twitter p-15 p-relative mb-10 between-flex">
                        <img src={require("../images/twitter.png")} className="h-full center-flex main-tran"/>
                        <span>90K Followers</span>
                        <a className="fs-14 c-white btn-shape" href="#">Follow</a>
                    </div>
                    <div className="box facebook p-15 p-relative mb-10 between-flex">
                        <img src={require("../images/facebook.png")} className="h-full center-flex main-tran"/>
                        <span>2M Like</span>
                        <a className="fs-14 c-white btn-shape" href="#">Like</a>
                    </div>
                    <div className="box youtube p-15 p-relative mb-10 between-flex">
                        <img src={require("../images/youtube.png")} className="h-full center-flex main-tran"/>
                        <span>1M Subs</span>
                        <a className="fs-14 c-white btn-shape" href="#">Subscribe</a>
                    </div>
                    <div className="box linkedin p-15 p-relative mb-10 between-flex">
                        <img src={require("../images/linkedin.png")} className="h-full center-flex main-tran"/>
                        <span>70K Followers</span>
                        <a className="fs-14 c-white btn-shape" href="#">Follow</a>
                    </div>
                </div>
                {/* end Social Media box */}
            </div>
            {/* start Projects box */}
            <div className="project main-box m-20">
                <h2 className="mt-0 mb-20">Projects</h2>
                <div className="responsive-table">
                    <table className="fs-15 w-full">
                        <thead className="">
                            <tr>
                                <th className="bg-eee p-15">Name</th>
                                <th className="bg-eee p-15">Finish Date</th>
                                <th className="bg-eee p-15">Client</th>
                                <th className="bg-eee p-15">Price</th>
                                <th className="bg-eee p-15">Team</th>
                                <th className="bg-eee p-15">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ministry Wikipedia</td>
                                <td>10 May 2022</td>
                                <td>Ministry</td>
                                <td>$5300</td>
                                <td className="p-relative">
                                    <a href="#"><img src={require("../images/team-01.png")} alt="here is image"/></a>
                                    <a href="#"><img src={require("../images/team-02.png")} alt="here is image"/></a>
                                    <a href="#"><img src={require("../images/team-03.png")} alt="here is image"/></a>
                                    <a href="#"><img src={require("../images/team-05.png")} alt="here is image"/></a>
                                </td>
                                <td> <span className="label bg-orange c-white btn-shape fs-14">Pending</span> </td>
                            </tr>
                            <tr>
                                <td>Elzero Shop</td>
                                <td>12 Oct 2024</td>
                                <td>Elzero Company</td>
                                <td>$1500</td>
                                <td className="p-relative">
                                    <a href="#"><img src={require("../images/team-04.png")} alt="here is image"/></a>
                                    <a href="#"><img src={require("../images/team-03.png")} alt="here is image"/></a>
                                    <a href="#"><img src={require("../images/team-02.png")} alt="here is image"/></a>
                                </td>
                                <td> <span className="label bg-blue c-white btn-shape fs-14">In Progress</span> </td>
                            </tr>
                            <tr>
                                <td>Bouba App</td>
                                <td>05 Sep 2024</td>
                                <td>Bouba</td>
                                <td>$800</td>
                                <td className="p-relative">
                                    <a href="#"><img src={require("../images/team-03.png")} alt="here is image"/></a>
                                    <a href="#"><img src={require("../images/team-01.png")} alt="here is image"/></a>
                                    <a href="#"><img src={require("../images/team-05.png")} alt="here is image"/></a>
                                </td>
                                <td> <span className="label bg-green c-white btn-shape fs-14">Completed</span> </td>
                            </tr>
                            <tr>
                                <td>Mahmoud Website</td>
                                <td>22 May 2024</td>
                                <td>Mahmoud</td>
                                <td>$600</td>
                                <td className="p-relative">
                                    <a href="#"><img src={require("../images/team-03.png")} alt="here is image"/></a>
                                    <a href="#"><img src={require("../images/team-02.png")} alt="here is image"/></a>
                                </td>
                                <td> <span className="label bg-green c-white btn-shape fs-14">Completed</span> </td>
                            </tr>
                            <tr>
                                <td>Sayed Website</td>
                                <td>24 May 2024</td>
                                <td>Sayed</td>
                                <td>$300</td>
                                <td className="p-relative">
                                    <a href="#"><img src={require("../images/team-02.png")} alt="here is image"/></a>
                                    <a href="#"><img src={require("../images/team-01.png")} alt="here is image"/></a>
                                </td>
                                <td> <span className="label bg-red c-white btn-shape fs-14">Rejected</span> </td>
                            </tr>
                            <tr>
                                <td>Arena Application</td>
                                <td>01 Mar 2024</td>
                                <td>Arena Company</td>
                                <td>$2600</td>
                                <td className="p-relative">
                                    <a href="#"><img src={require("../images/team-02.png")} alt="here is image"/></a>
                                    <a href="#"><img src={require("../images/team-01.png")} alt="here is image"/></a>
                                    <a href="#"><img src={require("../images/team-04.png")} alt="here is image"/></a>
                                    <a href="#"><img src={require("../images/team-05.png")} alt="here is image"/></a>
                                </td>
                                <td> <span className="label bg-green c-white btn-shape fs-14">Completed</span> </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            {/* end Projects box */}
        </div>
    )
}