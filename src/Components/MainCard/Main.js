import React, { Component } from "react";
import './Main.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faCheck, faContactBook, faPhone } from "@fortawesome/free-solid-svg-icons";
import img1 from './images1/image1.png'
import img2 from './images1/image2.png'
import img3 from './images1/image3.png'
import img4 from './images1/image4.png'
import img5 from './images1/image5.png'


class Main extends Component {
    constructor (props){
        super(props);

        this.state = {
            darkMode: false
        }
    }

    toggleDarkMode = () =>{
    this.state({darkMode: !this.state.darkMode})
    }

 
    render() {
        return (
            <div className={'main'}>
            <div className="row pt-3">
                    <div className="col ">
                    <div className={`row`}>

                            <div className="col d-flex ">
                                <img src={img1} alt="" />
                                <div className=" ">
                                    <p className={`h6 ms-4 d-flex justify-content${this.toggleDarkMode ? 'white' : 'black'}`}>Abhishek Bro </p>
                                    <p className="ms-4"> <FontAwesomeIcon icon={faCheck} /> Ma dami 👌 caption ma  garchu hai vai...</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col ">
                        <div className="row ">
                            <div className="col d-flex ">
                                <img src={img2} alt="" />
                                <div className=" ">
                                    <p className="h6 ms-4">Sagar Bro</p>
                                    <p className="ms-4"> <FontAwesomeIcon icon={faCheck} /> Like colombia, ko fox movies haru metro g...</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col ">
                        <div className="row ">
                            <div className="col d-flex ">
                                <img src={img3} alt="" />
                                <div className=" ">
                                    <p className="h6 ms-4">Niranjan vai UX Designer</p>
                                    <p className="ms-4"> <FontAwesomeIcon icon={faCheck} /> Yeso freelancing haniyo bhane sajilo hunch...</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col ">
                        <div className="row ">
                            <div className="col d-flex ">
                                <img src={img4} alt="" />
                                <div className=" ">
                                    <p className="h6 ms-4">Abhishek Bro</p>
                                    <p className="ms-4"> <FontAwesomeIcon icon={faCheck} /> Order now lai download rakhdaa k hol...</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col ">
                        <div className="row ">
                            <div className="col d-flex ">
                                <img src={img5} alt="" />
                                <div className=" ">
                                    <p className="h6 ms-4">Abhishek Bro</p>
                                    <p className="ms-4"> <FontAwesomeIcon icon={faCheck} />Design by maa tpai tag garxu 😂 ni ki ka...</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row py-2 my-3">
                <hr />
                    <div className="col text-center">
                    <FontAwesomeIcon icon={faChartBar}/>
                    </div>
                    <div className="col text-center">
                    <FontAwesomeIcon icon={faPhone}/>
                    </div>
                    <div className="col text-center">
                    <FontAwesomeIcon icon={faContactBook}/>
                    </div>
                </div>



            </div>
        )
    }
} export default Main