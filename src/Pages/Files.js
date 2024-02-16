import { faAnglesUp, faDownload, faFileCsv, faFilePdf, faFileWord, faImages } from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header";
import "../css/Files.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Files() {
    document.title = "Files";
    return(
        <div className="files-page w-full">
            <Header/>
            <h1 className="p-relative">Files</h1>
            <div className="files d-flex m-20 gap-20">
                {/* start files stats */}
                <div className="files-stats bg-white p-20 rad-10">
                    <h2 className="mt-0 mb-15 txt-c-mobile">Files Statistics</h2>
                    {/* start right box  */}
                    <div className="d-flex align-center border-eee p-10 rad-6 mb-15 fs-14">
                        <FontAwesomeIcon icon={faFilePdf} className="c-blue mr-10 center-flex file-icon"/>
                        <div className="info">
                            <span>PDF Files</span>
                            <span className="c-gray d-block mt-5">130</span>
                        </div>
                        <div className="size c-gray fs-15">6.5GB</div>
                    </div>
                    <div className="d-flex align-center border-eee p-10 rad-6 mb-15 fs-14">
                        <FontAwesomeIcon icon={faImages} className="c-green mr-10 center-flex file-icon"/>
                        <div className="info">
                            <span>Images</span>
                            <span className="c-gray d-block mt-5">115 Files</span>
                        </div>
                        <div className="size c-gray fs-15">3.5GB</div>
                    </div>
                    <div className="d-flex align-center border-eee p-10 rad-6 mb-15 fs-14">
                        <FontAwesomeIcon icon={faFileWord} className="c-red mr-10 center-flex file-icon"/>
                        <div className="info">
                            <span>Word Files</span>
                            <span className="c-gray d-block mt-5">110 Files</span>
                        </div>
                        <div className="size c-gray fs-15">3.2GB</div>
                    </div>
                    <div className="d-flex align-center border-eee p-10 rad-6 mb-15 fs-14">
                        <FontAwesomeIcon icon={faFileCsv} className="c-orange mr-10 center-flex file-icon"/>
                        <div className="info">
                            <span>CSV Files</span>
                            <span className="c-gray d-block mt-5">99 Files</span>
                        </div>
                        <div className="size c-gray fs-15">2.9GB</div>
                    </div>
                    <a href="#" className="upload c-white bg-blue rad-6 d-block p-10 w-fit main-tran">
                        <FontAwesomeIcon icon={faAnglesUp} className="upload-icon"/> Upload
                    </a>
                    {/* start right box */}
                </div>
                {/* start files stats */}

                {/* start files content */}
                <div className="files-content d-grid gap-20">
                    {/* start left box  */}
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/avi.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.avi</div>
                        <p className="c-gray fs-14">Admin</p>
                        <div className="info between-flex pt-10 mp-10 fs-14 c-gray">
                            <span>16/5/2021</span>
                            <span>12.5MB</span>
                        </div>
                    </div>
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/pdf.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.pdf</div>
                        <p className="c-gray fs-14">Elzero</p>
                        <div className="info between-flex pt-10 mp-10 fs-14 c-gray">
                            <span>20/06/2020</span>
                            <span>5.5MB</span>
                        </div>
                    </div>
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/eps.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.eps</div>
                        <p className="c-gray fs-14">Uploader</p>
                        <div className="info between-flex pt-10 mp-10 fs-14 c-gray">
                            <span>16/5/2021</span>
                            <span>2.7MB</span>
                        </div>
                    </div>
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/psd.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.psd</div>
                        <p className="c-gray fs-14">Osama</p>
                        <div className="info between-flex mt-10 mp-10 fs-14 c-gray">
                            <span>16/5/2021</span>
                            <span>15.1MB</span>
                        </div>
                    </div>
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/dll.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.dll</div>
                        <p className="c-gray fs-14">Coder</p>
                        <div className="info between-flex pt-10 mp-10 fs-14 c-gray">
                            <span>16/5/2021</span>
                            <span>2.2MB</span>
                        </div>
                    </div>
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/png.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.png</div>
                        <p className="c-gray fs-14">Designer</p>
                        <div className="info between-flex pt-10 mp-10 fs-14 c-gray">
                            <span>20/06/2020</span>
                            <span>1.1MB</span>
                        </div>
                    </div>
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/dll.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.dll</div>
                        <p className="c-gray fs-14">Coder</p>
                        <div className="info between-flex pt-10 mp-10 fs-14 c-gray">
                            <span>16/05/2020</span>
                            <span>2.2MB</span>
                        </div>
                    </div>
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/pdf.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.png</div>
                        <p className="c-gray fs-14">Designer</p>
                        <div className="info between-flex pt-10 mp-10 fs-14 c-gray">
                            <span>16/5/2021</span>
                            <span>1.1MB</span>
                        </div>
                    </div>
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/pdf.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.pdf</div>
                        <p className="c-gray fs-14">Elzero</p>
                        <div className="info between-flex pt-10 mp-10 fs-14 c-gray">
                            <span>20/06/2020</span>
                            <span>5.5MB</span>
                        </div>
                    </div>
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/avi.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.avi</div>
                        <p className="c-gray fs-14">Admin</p>
                        <div className="info between-flex pt-10 mp-10 fs-14 c-gray">
                            <span>16/5/2021</span>
                            <span>12.5MB</span>
                        </div>
                    </div>
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/pdf.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.pdf</div>
                        <p className="c-gray fs-14">Elzero</p>
                        <div className="info between-flex pt-10 mp-10 fs-14 c-gray">
                            <span>20/06/2020</span>
                            <span>5.5MB</span>
                        </div>
                    </div>
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/eps.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.eps</div>
                        <p className="c-gray fs-14">Uploader</p>
                        <div className="info between-flex pt-10 mp-10 fs-14 c-gray">
                            <span>16/5/2021</span>
                            <span>2.7MB</span>
                        </div>
                    </div>
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/psd.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.psd</div>
                        <p className="c-gray fs-14">Osama</p>
                        <div className="info between-flex mt-10 mp-10 fs-14 c-gray">
                            <span>16/5/2021</span>
                            <span>15.1MB</span>
                        </div>
                    </div>
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/dll.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.dll</div>
                        <p className="c-gray fs-14">Coder</p>
                        <div className="info between-flex pt-10 mp-10 fs-14 c-gray">
                            <span>16/5/2021</span>
                            <span>2.2MB</span>
                        </div>
                    </div>
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/png.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.png</div>
                        <p className="c-gray fs-14">Designer</p>
                        <div className="info between-flex pt-10 mp-10 fs-14 c-gray">
                            <span>20/06/2020</span>
                            <span>1.1MB</span>
                        </div>
                    </div>
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/dll.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.dll</div>
                        <p className="c-gray fs-14">Coder</p>
                        <div className="info between-flex pt-10 mp-10 fs-14 c-gray">
                            <span>16/05/2020</span>
                            <span>2.2MB</span>
                        </div>
                    </div>
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/pdf.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.png</div>
                        <p className="c-gray fs-14">Designer</p>
                        <div className="info between-flex pt-10 mp-10 fs-14 c-gray">
                            <span>16/5/2021</span>
                            <span>1.1MB</span>
                        </div>
                    </div>
                    <div className="file bg-white p-20 rad-10">
                        <FontAwesomeIcon icon={faDownload} className="c-gray p-absolute"/>
                        <div className="icon txt-c">
                        <img src={require("../images/pdf.png")} alt="here is image"
                        className="mt-15 mb-15 main-tran"/>
                        </div>
                        <div className="txt-c mb-10 fs-14">my-file.pdf</div>
                        <p className="c-gray fs-14">Elzero</p>
                        <div className="info between-flex pt-10 mp-10 fs-14 c-gray">
                            <span>20/06/2020</span>
                            <span>5.5MB</span>
                        </div>
                    </div>
                    {/* end left box  */}
                </div>
                {/* end files content */}
            </div>
        </div>
    )
}