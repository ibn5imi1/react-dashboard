import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Components/Header";
import "../css/Plans.css";
import { faCheck, faCircleInfo, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Plans() {
    document.title = "Plans";
    return(
        <div className="plans-page w-full">
            <Header/>
            <h1 className="p-relative">Plans</h1>
            <div className="plans d-grid m-20 gap-20">
                {/* start plan */}
                <div className="plan green bg-white p-20">
                    <div className="top bg-green p-20 txt-c">
                        <h2 className="m-0 c-white">Free</h2>
                        <div className="price c-white w-fit m-auto"><sup>$</sup>0.00</div>
                    </div>
                    <ul className="m-0">
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i c-green" />
                            Access All Text Lessons
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i c-green" />
                            Access All Videos Lessons
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i c-green" />
                            Appear On Leaderboard
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faXmark} className="i c-red"/>
                            Browse Content Without Ads
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faXmark} className="i c-red"/>
                            Access All Assignments
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faXmark} className="i c-red"/>
                            Get Daily Prizes
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faXmark} className="i c-red"/>
                            Earn Certificate
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faXmark} className="i c-red"/>
                            1 GB Space For Hosting Files
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faXmark} className="i c-red"/>
                            Access Badge System
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                    </ul>
                    <a href="#" className="btn-shape bg-green c-white d-block w-fit mt-10">Join</a>
                </div>
                {/* end plan */}

                {/* start plan */}
                <div className="plan blue bg-white p-20">
                    <div className="top bg-blue p-20 txt-c">
                        <h2 className="m-0 c-white">Basic</h2>
                        <div className="price c-white w-fit m-auto"><sup>$</sup>7.99</div>
                    </div>
                    <ul className="m-0">
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i c-green" />
                            Access All Text Lessons
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i c-green" />
                            Access All Videos Lessons
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i  c-green" />
                            Appear On Leaderboard
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i c-green" />
                            Browse Content Without Ads
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i c-green" />
                            Access All Assignments
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i c-green" />
                            Get Daily Prizes
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i c-green" />
                            Earn Certificate
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faXmark} className="i c-red"/>
                            1 GB Space For Hosting Files
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faXmark} className="i c-red"/>
                            Access Badge System
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                    </ul>
                    <a href="#" className="btn-shape bg-blue c-white d-block w-fit mt-10">Join</a>
                </div>
                {/* end plan */}

                {/* start plan */}
                <div className="plan orange bg-white p-20">
                    <div className="top bg-orange p-20 txt-c">
                        <h2 className="m-0 c-white">Premium</h2>
                        <div className="price c-white w-fit m-auto"><sup>$</sup>19.99</div>
                    </div>
                    <ul className="m-0">
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i c-green" />
                            Access All Text Lessons
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i c-green" />
                            Access All Videos Lessons
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i  c-green" />
                            Appear On Leaderboard
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i c-green" />
                            Browse Content Without Ads
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i c-green" />
                            Access All Assignments
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i c-green" />
                            Get Daily Prizes
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i c-green" />
                            Earn Certificate
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i c-green" />
                            1 GB Space For Hosting Files
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="i c-green" />
                            Access Badge System
                            <FontAwesomeIcon icon={faCircleInfo} className="i help c-gray pointer"/>
                        </li>
                    </ul>
                    <a href="#" className="btn-shape c-gray txt-c d-block mt-10">This Is Your Current Plan</a>
                </div>
                {/* end plan */}
            </div>
        </div>
    )
}