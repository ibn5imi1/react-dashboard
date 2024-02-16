import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Components/Header";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../css/Courses.css";

export default function Courses() {
    document.title = "Courses";
    return(
        <div className="courses-page w-full">
            <Header/>
            <h1 className="p-relative">Courses</h1>
            <div className="courses m-20 d-grid gap-20">
                {/* start course box */}
                <div className="course bg-white rad-6 p-relative">
                    <img src={require("../images/course-01.jpg")} alt="here is image"
                    className="cover"/>
                    <img src={require("../images/team-01.png")} alt="here is image"
                    className="instructor rad-half"/>
                    <div className="p-20">
                        <h4 className="m-0">Mastering Web Design</h4>
                        <p className="description c-gray mt-15 fs-14">Master The Art Of Web Designing And Mocking,
                        Prototyping And Creating Web Design Architecture</p>
                    </div>
                    <div className="info p-relative between-flex fs-14 p-20">
                        <span className="title bg-blue c-white btn-shape">Course Info</span>
                        <span className="c-gray">
                            <FontAwesomeIcon icon={faUser} />
                            950
                        </span>
                        <span className="c-gray">
                            $165
                        </span>
                    </div>
                </div>
                {/* end course box */}

                {/* start course box */}
                <div className="course bg-white rad-6 p-relative">
                    <img src={require("../images/course-02.jpg")} alt="here is image"
                    className="cover"/>
                    <img src={require("../images/team-02.png")} alt="here is image"
                    className="instructor rad-half"/>
                    <div className="p-20">
                        <h4 className="m-0">Data Structure And Algorithms</h4>
                        <p className="description c-gray mt-15 fs-14">Master The Art Of Data Strcuture And Famous
                        Algorithms Like Sorting, Dividing And Conquering</p>
                    </div>
                    <div className="info p-relative between-flex fs-14 p-20">
                        <span className="title bg-blue c-white btn-shape">Course Info</span>
                        <span className="c-gray">
                            <FontAwesomeIcon icon={faUser} />
                            1150
                        </span>
                        <span className="c-gray">
                            $210
                        </span>
                    </div>
                </div>
                {/* end course box */}

                {/* start course box */}
                <div className="course bg-white rad-6 p-relative">
                    <img src={require("../images/course-03.jpg")} alt="here is image"
                    className="cover"/>
                    <img src={require("../images/team-01.png")} alt="here is image"
                    className="instructor rad-half"/>
                    <div className="p-20">
                        <h4 className="m-0">Responsive Web Design</h4>
                        <p className="description c-gray mt-15 fs-14">Mastering Responsive Web Design And
                        Media Queries And Know Everything About Breakpoints</p>
                    </div>
                    <div className="info p-relative between-flex fs-14 p-20">
                        <span className="title bg-blue c-white btn-shape">Course Info</span>
                        <span className="c-gray">
                            <FontAwesomeIcon icon={faUser} />
                            650
                        </span>
                        <span className="c-gray">
                            $90
                        </span>
                    </div>
                </div>
                {/* end course box */}

                {/* start course box */}
                <div className="course bg-white rad-6 p-relative">
                    <img src={require("../images/course-04.jpg")} alt="here is image"
                    className="cover"/>
                    <img src={require("../images/team-03.png")} alt="here is image"
                    className="instructor rad-half"/>
                    <div className="p-20">
                        <h4 className="m-0">Mastering Python</h4>
                        <p className="description c-gray mt-15 fs-14">Mastering Python To Prepare For Data Science
                        And AI And Automating Things in Your Life</p>
                    </div>
                    <div className="info p-relative between-flex fs-14 p-20">
                        <span className="title bg-blue c-white btn-shape">Course Info</span>
                        <span className="c-gray">
                            <FontAwesomeIcon icon={faUser} />
                            950
                        </span>
                        <span className="c-gray">
                            $250
                        </span>
                    </div>
                </div>
                {/* end course box */}

                {/* start course box */}
                <div className="course bg-white rad-6 p-relative">
                    <img src={require("../images/course-05.jpg")} alt="here is image"
                    className="cover"/>
                    <img src={require("../images/team-03.png")} alt="here is image"
                    className="instructor rad-half"/>
                    <div className="p-20">
                        <h4 className="m-0">PHP Examples</h4>
                        <p className="description c-gray mt-15 fs-14">PHP Tutorials And Examples And Practice
                        On Web Application And Connecting With Databases</p>
                    </div>
                    <div className="info p-relative between-flex fs-14 p-20">
                        <span className="title bg-blue c-white btn-shape">Course Info</span>
                        <span className="c-gray">
                            <FontAwesomeIcon icon={faUser} />
                            850
                        </span>
                        <span className="c-gray">
                            $150
                        </span>
                    </div>
                </div>
                {/* end course box */}

                {/* start course box */}
                <div className="course bg-white rad-6 p-relative">
                    <img src={require("../images/course-02.jpg")} alt="here is image"
                    className="cover"/>
                    <img src={require("../images/team-02.png")} alt="here is image"
                    className="instructor rad-half"/>
                    <div className="p-20">
                        <h4 className="m-0">Data Structure And Algorithms</h4>
                        <p className="description c-gray mt-15 fs-14">Master The Art Of Data Strcuture And
                        Famous Algorithms Like Sorting, Dividing And Conquering</p>
                    </div>
                    <div className="info p-relative between-flex fs-14 p-20">
                        <span className="title bg-blue c-white btn-shape">Course Info</span>
                        <span className="c-gray">
                            <FontAwesomeIcon icon={faUser} />
                            1150
                        </span>
                        <span className="c-gray">
                            $210
                        </span>
                    </div>
                </div>
                {/* end course box */}

                {/* start course box */}
                <div className="course bg-white rad-6 p-relative">
                    <img src={require("../images/course-03.jpg")} alt="here is image"
                    className="cover"/>
                    <img src={require("../images/team-01.png")} alt="here is image"
                    className="instructor rad-half"/>
                    <div className="p-20">
                        <h4 className="m-0">Responsive Web Design</h4>
                        <p className="description c-gray mt-15 fs-14">Mastering Responsive Web Design And
                        Media Queries And Know Everything About Breakpoints</p>
                    </div>
                    <div className="info p-relative between-flex fs-14 p-20">
                        <span className="title bg-blue c-white btn-shape">Course Info</span>
                        <span className="c-gray">
                            <FontAwesomeIcon icon={faUser} />
                            650
                        </span>
                        <span className="c-gray">
                            $90
                        </span>
                    </div>
                </div>
                {/* end course box */}

                 {/* start course box */}
                <div className="course bg-white rad-6 p-relative">
                    <img src={require("../images/course-01.jpg")} alt="here is image"
                    className="cover"/>
                    <img src={require("../images/team-01.png")} alt="here is image"
                    className="instructor rad-half"/>
                    <div className="p-20">
                        <h4 className="m-0">Mastering Web Design</h4>
                        <p className="description c-gray mt-15 fs-14">Master The Art Of Web Designing And Mocking,
                        Prototyping And Creating Web Design Architecture</p>
                    </div>
                    <div className="info p-relative between-flex fs-14 p-20">
                        <span className="title bg-blue c-white btn-shape">Course Info</span>
                        <span className="c-gray">
                            <FontAwesomeIcon icon={faUser} />
                            950
                        </span>
                        <span className="c-gray">
                            $165
                        </span>
                    </div>
                </div>
                {/* end course box */}

                {/* start course box */}
                <div className="course bg-white rad-6 p-relative">
                    <img src={require("../images/course-05.jpg")} alt="here is image"
                    className="cover"/>
                    <img src={require("../images/team-03.png")} alt="here is image"
                    className="instructor rad-half"/>
                    <div className="p-20">
                        <h4 className="m-0">PHP Examples</h4>
                        <p className="description c-gray mt-15 fs-14">PHP Tutorials And Examples And Practice
                        On Web Application And Connecting With Databases</p>
                    </div>
                    <div className="info p-relative between-flex fs-14 p-20">
                        <span className="title bg-blue c-white btn-shape">Course Info</span>
                        <span className="c-gray">
                            <FontAwesomeIcon icon={faUser} />
                            850
                        </span>
                        <span className="c-gray">
                            $150
                        </span>
                    </div>
                </div>
                {/* end course box */}

                {/* start course box */}
                <div className="course bg-white rad-6 p-relative">
                    <img src={require("../images/course-04.jpg")} alt="here is image"
                    className="cover"/>
                    <img src={require("../images/team-03.png")} alt="here is image"
                    className="instructor rad-half"/>
                    <div className="p-20">
                        <h4 className="m-0">Mastering Python</h4>
                        <p className="description c-gray mt-15 fs-14">Mastering Python To Prepare For Data Science
                        And AI And Automating Things in Your Life</p>
                    </div>
                    <div className="info p-relative between-flex fs-14 p-20">
                        <span className="title bg-blue c-white btn-shape">Course Info</span>
                        <span className="c-gray">
                            <FontAwesomeIcon icon={faUser} />
                            950
                        </span>
                        <span className="c-gray">
                            $250
                        </span>
                    </div>
                </div>
                {/* end course box */}
            </div>
        </div>
    )
}