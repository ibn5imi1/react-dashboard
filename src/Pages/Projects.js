import Header from "../Components/Header";
import "../css/Projects.css";

export default function Projects() {
    document.title = "Projects";
    return(
        <div className="projects-page w-full">
            <Header/>
            <h1 className="p-relative">Projects</h1>
            <div className="projects d-grid m-20 gap-20">
                {/* start project box */}
                <div className="project main-box p-relative">
                    <span className="date fs-14 c-gray">15/10/2021</span>
                    <h4 className="m-0">Elzero Dashboard</h4>
                    <p className="c-gray mt-10 mb-10 fs-14">Elzero Dashboard Project Design And Programming And Hosting</p>
                    <div className="team p-relative">
                        <a href="#"><img className="rad-half" src={require("../images/team-01.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-02.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-03.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-04.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-05.png")} alt="here is image"/></a>
                    </div>
                    <div className="do d-flex pt-15">
                        <span className="btn-shape bg-eee fs-14 ml-5">Programming</span>
                        <span className="btn-shape bg-eee fs-14 ml-5">Design</span>
                        <span className="btn-shape bg-eee fs-14 ml-5">Hosting</span>
                        <span className="btn-shape bg-eee fs-14 ml-5">Marketing</span>
                    </div>
                    <div className="info between-flex mt-15 pt-15">
                        <div className="prog bg-eee p-relative rad-6">
                            <span className="bg-red" style={{width:"70%"}}></span>
                        </div>
                        <div className="fs-14 c-gray">
                            $2500
                        </div>
                    </div>
                </div>
                {/* end project box */}

                {/* start project box */}
                <div className="project main-box p-relative">
                    <span className="date fs-14 c-gray">15/6/2022</span>
                    <h4 className="m-0">Academy Portal</h4>
                    <p className="c-gray mt-10 mb-10 fs-14">Academy Portal Project Design And Programming</p>
                    <div className="team p-relative">
                        <a href="#"><img className="rad-half" src={require("../images/team-01.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-02.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-04.png")} alt="here is image"/></a>
                    </div>
                    <div className="do d-flex pt-15">
                        <span className="btn-shape bg-eee fs-14 ml-5">Programming</span>
                        <span className="btn-shape bg-eee fs-14 ml-5">Design</span>
                    </div>
                    <div className="info between-flex mt-15 pt-15">
                        <div className="prog bg-eee p-relative rad-6">
                            <span className="bg-green" style={{width:"40%"}}></span>
                        </div>
                        <div className="fs-14 c-gray">
                            $1800
                        </div>
                    </div>
                </div>
                {/* end project box */}

                {/* start project box */}
                <div className="project main-box p-relative">
                    <span className="date fs-14 c-gray">15/6/2022</span>
                    <h4 className="m-0">Chatting Application</h4>
                    <p className="c-gray mt-10 mb-10 fs-14">Chatting Application Project Design</p>
                    <div className="team p-relative">
                        <a href="#"><img className="rad-half" src={require("../images/team-01.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-02.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-04.png")} alt="here is image"/></a>
                    </div>
                    <div className="do d-flex pt-15">
                        <span className="btn-shape bg-eee fs-14 ml-5">Design</span>
                    </div>
                    <div className="info between-flex mt-15 pt-15">
                        <div className="prog bg-eee p-relative rad-6">
                            <span className="bg-blue" style={{width:"90%"}}></span>
                        </div>
                        <div className="fs-14 c-gray">
                            $950
                        </div>
                    </div>
                </div>
                {/* end project box */}

                {/* start project box */}
                <div className="project main-box p-relative">
                    <span className="date fs-14 c-gray">15/10/2022</span>
                    <h4 className="m-0">Ahmed Dashboard</h4>
                    <p className="c-gray mt-10 mb-10 fs-14">Ahmed Dashboard Project Design And Programming And Hosting</p>
                    <div className="team p-relative">
                        <a href="#"><img className="rad-half" src={require("../images/team-01.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-02.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-04.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-03.png")} alt="here is image"/></a>
                    </div>
                    <div className="do d-flex pt-15">
                        <span className="btn-shape bg-eee fs-14 ml-5">Programming</span>
                        <span className="btn-shape bg-eee fs-14 ml-5">Design</span>
                        <span className="btn-shape bg-eee fs-14 ml-5">Hosting</span>
                        <span className="btn-shape bg-eee fs-14 ml-5">Marketing</span>
                    </div>
                    <div className="info between-flex mt-15 pt-15">
                        <div className="prog bg-eee p-relative rad-6">
                            <span className="bg-green" style={{width:"30%"}}></span>
                        </div>
                        <div className="fs-14 c-gray">
                            $950
                        </div>
                    </div>
                </div>
                {/* end project box */}

                {/* start project box */}
                <div className="project main-box p-relative">
                    <span className="date fs-14 c-gray">25/8/2022</span>
                    <h4 className="m-0">Ahmed Portal</h4>
                    <p className="c-gray mt-10 mb-10 fs-14">Ahmed Portal Project Design And Programming</p>
                    <div className="team p-relative">
                        <a href="#"><img className="rad-half" src={require("../images/team-02.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-04.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-03.png")} alt="here is image"/></a>
                    </div>
                    <div className="do d-flex pt-15">
                        <span className="btn-shape bg-eee fs-14 ml-5">Programming</span>
                        <span className="btn-shape bg-eee fs-14 ml-5">Design</span>
                    </div>
                    <div className="info between-flex mt-15 pt-15">
                        <div className="prog bg-eee p-relative rad-6">
                            <span className="bg-green" style={{width:"60%"}}></span>
                        </div>
                        <div className="fs-14 c-gray">
                            $850
                        </div>
                    </div>
                </div>
                {/* end project box */}

                {/* start project box */}
                <div className="project main-box p-relative">
                    <span className="date fs-14 c-gray">30/12/2022</span>
                    <h4 className="m-0">Mohamed Application</h4>
                    <p className="c-gray mt-10 mb-10 fs-14">Ahmed Portal Project Design And Programming</p>
                    <div className="team p-relative">
                        <a href="#"><img className="rad-half" src={require("../images/team-05.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-03.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-02.png")} alt="here is image"/></a>
                    </div>
                    <div className="do d-flex pt-15">
                        <span className="btn-shape bg-eee fs-14 ml-5">Design</span>
                    </div>
                    <div className="info between-flex mt-15 pt-15">
                        <div className="prog bg-eee p-relative rad-6">
                            <span className="bg-red" style={{width:"25%"}}></span>
                        </div>
                        <div className="fs-14 c-gray">
                            $950
                        </div>
                    </div>
                </div>
                {/* end project box */}

                {/* start project box */}
                <div className="project main-box p-relative">
                    <span className="date fs-14 c-gray">3/12/2022</span>
                    <h4 className="m-0">Mohamed Dashboard</h4>
                    <p className="c-gray mt-10 mb-10 fs-14">Mohamed Dashboard Project Design And Programming And Hosting</p>
                    <div className="team p-relative">
                        <a href="#"><img className="rad-half" src={require("../images/team-03.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-02.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-01.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-04.png")} alt="here is image"/></a>
                    </div>
                    <div className="do d-flex pt-15">
                        <span className="btn-shape bg-eee fs-14 ml-5">Programming</span>
                        <span className="btn-shape bg-eee fs-14 ml-5">Design</span>
                        <span className="btn-shape bg-eee fs-14 ml-5">Hosting</span>
                        <span className="btn-shape bg-eee fs-14 ml-5">Marketing</span>
                    </div>
                    <div className="info between-flex mt-15 pt-15">
                        <div className="prog bg-eee p-relative rad-6">
                            <span className="bg-green" style={{width:"90%"}}></span>
                        </div>
                        <div className="fs-14 c-gray">
                            $1950
                        </div>
                    </div>
                </div>
                {/* end project box */}

                {/* start project box */}
                <div className="project main-box p-relative">
                    <span className="date fs-14 c-gray">11/11/2022</span>
                    <h4 className="m-0">Mohamed Portal</h4>
                    <p className="c-gray mt-10 mb-10 fs-14">Mohamed Portal Project Design And Programming</p>
                    <div className="team p-relative">
                        <a href="#"><img className="rad-half" src={require("../images/team-03.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-05.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-01.png")} alt="here is image"/></a>
                    
                    </div>
                    <div className="do d-flex pt-15">
                        <span className="btn-shape bg-eee fs-14 ml-5">Programming</span>
                        <span className="btn-shape bg-eee fs-14 ml-5">Design</span>
                    </div>
                    <div className="info between-flex mt-15 pt-15">
                        <div className="prog bg-eee p-relative rad-6">
                            <span className="bg-green" style={{width:"66%"}}></span>
                        </div>
                        <div className="fs-14 c-gray">
                            $1650
                        </div>
                    </div>
                </div>
                {/* end project box */}

                {/* start project box */}
                <div className="project main-box p-relative">
                    <span className="date fs-14 c-gray">11/11/2022</span>
                    <h4 className="m-0">Ahmed Application</h4>
                    <p className="c-gray mt-10 mb-10 fs-14">Ahmed Application Project Design</p>
                    <div className="team p-relative">
                        <a href="#"><img className="rad-half" src={require("../images/team-03.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-05.png")} alt="here is image"/></a>
                        <a href="#"><img className="rad-half" src={require("../images/team-01.png")} alt="here is image"/></a>
                    
                    </div>
                    <div className="do d-flex pt-15">
                        <span className="btn-shape bg-eee fs-14 ml-5">Design</span>
                    </div>
                    <div className="info between-flex mt-15 pt-15">
                        <div className="prog bg-eee p-relative rad-6">
                            <span className="bg-green" style={{width:"80%"}}></span>
                        </div>
                        <div className="fs-14 c-gray">
                            $950
                        </div>
                    </div>
                </div>
                {/* end project box */}
            </div>
        </div>
    )
}