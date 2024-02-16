import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Components/Header";
import "../css/Friends.css";
import { faCodeCommit, faEnvelope, faFaceSmile, faNewspaper, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Friends() {
    document.title = "Friends";
    return(
        <div className="friends-page w-full">
            <Header/>
            <h1 className="p-relative">Friends</h1>
            <div className="friends d-grid m-20 gap-20">
                {/* start friend box */}
                <div className="friend main-box p-relative">
                    <div className="contact">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran mr-10"/>
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran"/>
                    </div>
                    <div className="txt-c">
                        <img className="rad-half mt-10 mb-10 w-100 h-100" src={require("../images/friend-01.jpg")}/>
                        <h4 className="m-0">Ahmed Nasser</h4>
                        <p className="c-gray fs-14 mt-5 mb-0">JavaScript Developer</p>
                    </div>
                    {/* start icons box */}
                    <div className="icons fs-14 p-relative pt-15 pb-15 mt-15 mb-15">
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faFaceSmile} className="mr-5"/>
                            <span>99 Friend</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faCodeCommit} className="mr-5" />
                            <span>15 Projects</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faNewspaper} className="mr-5" />
                            <span>25 Articles</span>
                        </div>
                        <span className="vib fs-bold c-orange">VIB</span>
                    </div>
                    {/* end icons box */}
                    <div className="info between-flex fs-14">
                        <span className="c-gray">Joined 02/10/2021</span>
                        <div>
                            <Link to={"/Profile"} className="bg-blue c-white btn-shape">Profile</Link>
                            <a href="#" className="bg-red c-white btn-shape ml-5">Remove</a>
                        </div>
                    </div>
                </div>
                {/* end friend box */}

                {/* start friend box */}
                <div className="friend main-box p-relative">
                    <div className="contact">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran mr-10"/>
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran"/>
                    </div>
                    <div className="txt-c">
                        <img className="rad-half mt-10 mb-10 w-100 h-100" src={require("../images/friend-02.jpg")}/>
                        <h4 className="m-0">Omar Fathy</h4>
                        <p className="c-gray fs-14 mt-5 mb-0">Cloud Developer</p>
                    </div>
                    {/* start icons box */}
                    <div className="icons fs-14 p-relative pt-15 pb-15 mt-15 mb-15">
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faFaceSmile} className="mr-5"/>
                            <span>30 Friend</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faCodeCommit} className="mr-5" />
                            <span>11 Projects</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faNewspaper} className="mr-5" />
                            <span>12 Articles</span>
                        </div>
                        <span className="vib fs-bold c-orange">VIB</span>
                    </div>
                    {/* end icons box */}
                    <div className="info between-flex fs-14">
                        <span className="c-gray">Joined 02/08/2020</span>
                        <div>
                            <Link to={"/Profile"} className="bg-blue c-white btn-shape">Profile</Link>
                            <a href="#" className="bg-red c-white btn-shape ml-5">Remove</a>
                        </div>
                    </div>
                </div>
                {/* end friend box */}

                {/* start friend box */}
                <div className="friend main-box  p-relative">
                    <div className="contact">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran mr-10"/>
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran"/>
                    </div>
                    <div className="txt-c">
                        <img className="rad-half mt-10 mb-10 w-100 h-100" src={require("../images/friend-03.jpg")}/>
                        <h4 className="m-0">Omar Ahmed</h4>
                        <p className="c-gray fs-14 mt-5 mb-0">Mobile Developer</p>
                    </div>
                    {/* start icons box */}
                    <div className="icons fs-14 p-relative pt-15 pb-15 mt-15 mb-15">
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faFaceSmile} className="mr-5"/>
                            <span>80 Friend</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faCodeCommit} className="mr-5" />
                            <span>20 Projects</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faNewspaper} className="mr-5" />
                            <span>18 Articles</span>
                        </div>
                        <span className="vib fs-bold c-orange">VIB</span>
                    </div>
                    {/* end icons box */}
                    <div className="info between-flex fs-14">
                        <span className="c-gray">Joined 02/06/2020</span>
                        <div>
                            <Link to={"/Profile"} className="bg-blue c-white btn-shape">Profile</Link>
                            <a href="#" className="bg-red c-white btn-shape ml-5">Remove</a>
                        </div>
                    </div>
                </div>
                {/* end friend box */}

                {/* start friend box */}
                <div className="friend main-box  p-relative">
                    <div className="contact">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran mr-10"/>
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran"/>
                    </div>
                    <div className="txt-c">
                        <img className="rad-half mt-10 mb-10 w-100 h-100" src={require("../images/friend-04.jpg")}/>
                        <h4 className="m-0">Shady Nabil</h4>
                        <p className="c-gray fs-14 mt-5 mb-0">Back-End Developer</p>
                    </div>
                    {/* start icons box */}
                    <div className="icons fs-14 p-relative pt-15 pb-15 mt-15 mb-15">
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faFaceSmile} className="mr-5"/>
                            <span>70 Friend</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faCodeCommit} className="mr-5" />
                            <span>30 Projects</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faNewspaper} className="mr-5" />
                            <span>18 Articles</span>
                        </div>
                        <span className="vib fs-bold c-orange">VIB</span>
                    </div>
                    {/* end icons box */}
                    <div className="info between-flex fs-14">
                        <span className="c-gray">Joined 28/06/2020</span>
                        <div>
                            <Link to={"/Profile"} className="bg-blue c-white btn-shape">Profile</Link>
                            <a href="#" className="bg-red c-white btn-shape ml-5">Remove</a>
                        </div>
                    </div>
                </div>
                {/* end friend box */}

                {/* start friend box */}
                <div className="friend main-box  p-relative">
                    <div className="contact">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran mr-10"/>
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran"/>
                    </div>
                    <div className="txt-c">
                        <img className="rad-half mt-10 mb-10 w-100 h-100" src={require("../images/friend-05.jpg")}/>
                        <h4 className="m-0">Mohamed Ibrahim</h4>
                        <p className="c-gray fs-14 mt-5 mb-0">Algorithm Developer</p>
                    </div>
                    {/* start icons box */}
                    <div className="icons fs-14 p-relative pt-15 pb-15 mt-15 mb-15">
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faFaceSmile} className="mr-5"/>
                            <span>80 Friend</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faCodeCommit} className="mr-5" />
                            <span>30 Projects</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faNewspaper} className="mr-5" />
                            <span>18 Articles</span>
                        </div>
                        <span className="vib fs-bold c-orange">VIB</span>
                    </div>
                    {/* end icons box */}
                    <div className="info between-flex fs-14">
                        <span className="c-gray">Joined 28/08/2020</span>
                        <div>
                            <Link to={"/Profile"} className="bg-blue c-white btn-shape">Profile</Link>
                            <a href="#" className="bg-red c-white btn-shape ml-5">Remove</a>
                        </div>
                    </div>
                </div>
                {/* end friend box */}

                {/* start friend box */}
                <div className="friend main-box  p-relative">
                    <div className="contact">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran mr-10"/>
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran"/>
                    </div>
                    <div className="txt-c">
                        <img className="rad-half mt-10 mb-10 w-100 h-100" src={require("../images/friend-04.jpg")}/>
                        <h4 className="m-0">Amr Hendawy</h4>
                        <p className="c-gray fs-14 mt-5 mb-0">Back-End Developer</p>
                    </div>
                    {/* start icons box */}
                    <div className="icons fs-14 p-relative pt-15 pb-15 mt-15 mb-15">
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faFaceSmile} className="mr-5"/>
                            <span>70 Friend</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faCodeCommit} className="mr-5" />
                            <span>30 Projects</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faNewspaper} className="mr-5" />
                            <span>18 Articles</span>
                        </div>
                        <span className="vib fs-bold c-orange">VIB</span>
                    </div>
                    {/* end icons box */}
                    <div className="info between-flex fs-14">
                        <span className="c-gray">Joined 28/06/2020</span>
                        <div>
                            <Link to={"/Profile"} className="bg-blue c-white btn-shape">Profile</Link>
                            <a href="#" className="bg-red c-white btn-shape ml-5">Remove</a>
                        </div>
                    </div>
                </div>
                {/* end friend box */}

                {/* start friend box */}
                <div className="friend main-box  p-relative">
                    <div className="contact">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran mr-10"/>
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran"/>
                    </div>
                    <div className="txt-c">
                        <img className="rad-half mt-10 mb-10 w-100 h-100" src={require("../images/friend-02.jpg")}/>
                        <h4 className="m-0">Mahmoud Adel</h4>
                        <p className="c-gray fs-14 mt-5 mb-0">Cloud Developer</p>
                    </div>
                    {/* start icons box */}
                    <div className="icons fs-14 p-relative pt-15 pb-15 mt-15 mb-15">
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faFaceSmile} className="mr-5"/>
                            <span>30 Friend</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faCodeCommit} className="mr-5" />
                            <span>11 Projects</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faNewspaper} className="mr-5" />
                            <span>12 Articles</span>
                        </div>
                        <span className="vib fs-bold c-orange">VIB</span>
                    </div>
                    {/* end icons box */}
                    <div className="info between-flex fs-14">
                        <span className="c-gray">Joined 02/08/2020</span>
                        <div>
                            <Link to={"/Profile"} className="bg-blue c-white btn-shape">Profile</Link>
                            <a href="#" className="bg-red c-white btn-shape ml-5">Remove</a>
                        </div>
                    </div>
                </div>
                {/* end friend box */}

                {/* start friend box */}
                <div className="friend main-box  p-relative">
                    <div className="contact">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran mr-10"/>
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran"/>
                    </div>
                    <div className="txt-c">
                        <img className="rad-half mt-10 mb-10 w-100 h-100" src={require("../images/friend-05.jpg")}/>
                        <h4 className="m-0">Ahmed Abuzaid</h4>
                        <p className="c-gray fs-14 mt-5 mb-0">Algorithm Developer</p>
                    </div>
                    {/* start icons box */}
                    <div className="icons fs-14 p-relative pt-15 pb-15 mt-15 mb-15">
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faFaceSmile} className="mr-5"/>
                            <span>80 Friend</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faCodeCommit} className="mr-5" />
                            <span>30 Projects</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faNewspaper} className="mr-5" />
                            <span>18 Articles</span>
                        </div>
                        <span className="vib fs-bold c-orange">VIB</span>
                    </div>
                    {/* end icons box */}
                    <div className="info between-flex fs-14">
                        <span className="c-gray">Joined 28/08/2020</span>
                        <div>
                            <Link to={"/Profile"} className="bg-blue c-white btn-shape">Profile</Link>
                            <a href="#" className="bg-red c-white btn-shape ml-5">Remove</a>
                        </div>
                    </div>
                </div>
                {/* end friend box */}

                {/* start friend box */}
                <div className="friend main-box p-relative">
                    <div className="contact">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran mr-10"/>
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran"/>
                    </div>
                    <div className="txt-c">
                        <img className="rad-half mt-10 mb-10 w-100 h-100" src={require("../images/friend-01.jpg")}/>
                        <h4 className="m-0">Gareeb Elshiekh</h4>
                        <p className="c-gray fs-14 mt-5 mb-0">JavaScript Developer</p>
                    </div>
                    {/* start icons box */}
                    <div className="icons fs-14 p-relative pt-15 pb-15 mt-15 mb-15">
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faFaceSmile} className="mr-5"/>
                            <span>99 Friend</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faCodeCommit} className="mr-5" />
                            <span>15 Projects</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faNewspaper} className="mr-5" />
                            <span>25 Articles</span>
                        </div>
                        <span className="vib fs-bold c-orange">VIB</span>
                    </div>
                    {/* end icons box */}
                    <div className="info between-flex fs-14">
                        <span className="c-gray">Joined 02/10/2021</span>
                        <div>
                            <Link to={"/Profile"} className="bg-blue c-white btn-shape">Profile</Link>
                            <a href="#" className="bg-red c-white btn-shape ml-5">Remove</a>
                        </div>
                    </div>
                </div>
                {/* end friend box */}

                {/* start friend box */}
                <div className="friend main-box  p-relative">
                    <div className="contact">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran mr-10"/>
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon c-gray bg-eee p-10 rad-half fs-14 pointer main-tran"/>
                    </div>
                    <div className="txt-c">
                        <img className="rad-half mt-10 mb-10 w-100 h-100" src={require("../images/friend-03.jpg")}/>
                        <h4 className="m-0">Hamza</h4>
                        <p className="c-gray fs-14 mt-5 mb-0">Mobile Developer</p>
                    </div>
                    {/* start icons box */}
                    <div className="icons fs-14 p-relative pt-15 pb-15 mt-15 mb-15">
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faFaceSmile} className="mr-5"/>
                            <span>80 Friend</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faCodeCommit} className="mr-5" />
                            <span>20 Projects</span>
                        </div>
                        <div className="mb-10">
                            <FontAwesomeIcon icon={faNewspaper} className="mr-5" />
                            <span>18 Articles</span>
                        </div>
                        <span className="vib fs-bold c-orange">VIB</span>
                    </div>
                    {/* end icons box */}
                    <div className="info between-flex fs-14">
                        <span className="c-gray">Joined 02/06/2020</span>
                        <div>
                            <Link to={"/Profile"} className="bg-blue c-white btn-shape">Profile</Link>
                            <a href="#" className="bg-red c-white btn-shape ml-5">Remove</a>
                        </div>
                    </div>
                </div>
                {/* end friend box */}
            </div>
        </div>
    )
}