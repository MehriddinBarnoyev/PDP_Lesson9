import React, { useMemo } from 'react';
import './Main.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faCheck, faContactBook, faPhone } from "@fortawesome/free-solid-svg-icons";
import img1 from './images1/image1.png'
import img2 from './images1/image2.png'
import img3 from './images1/image3.png'
import img4 from './images1/image4.png'
import img5 from './images1/image5.png'

const Main = ({ dark }) => {
    // Memoize the array of items to avoid re-creation on every render
    const items = useMemo(() => [
        { id: 1, name: "Abhishek Bro", message: "Ma dami 👌 caption ma  garchu hai vai...", image: img1 },
        { id: 2, name: "Sagar Bro", message: "Like colombia, ko fox movies haru metro g...", image: img2 },
        { id: 3, name: "Sagar Bro", message: "Yeso freelancing haniyo bhane sajilo hunch...", image: img3 },
        { id: 4, name: "Sagar Bro", message: "Order now lai download rakhdaa k hol...", image: img4 },
        { id: 5, name: "Sagar Bro", message: "Design by maa tpai tag garxu 😂 ni ki ka...", image: img5 }
    ], []);

    return (
        <div className={`main ${dark ? "bg-black" : "white"}`}>
            {items.map(item => (
                <Item key={item.id} item={item} dark={dark} />
            ))}
            <div className={`row py-2 my-3 ${dark ? "text-white" : "white"}`}>
                <hr />
                <div className={`col text-center `}>
                    <FontAwesomeIcon icon={faChartBar} />
                </div>
                <div className="col text-center">
                    <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="col text-center">
                    <FontAwesomeIcon icon={faContactBook} />
                </div>
            </div>
        </div>
    );
}

// Memoize the Item component to prevent unnecessary re-renders
const Item = React.memo(({ item, dark }) => {
    return (
        <div className={`row pt-3 ${dark ? 'white' : 'black'}`}>
            <div className="col ">
                <div className="row">
                    <div className="col d-flex">
                        <img src={item.image} alt="" />
                        <div className="">
                            <p className={`h6 ms-4 d-flex justify-content ${dark ? "text-white" : "white"}`}>{item.name}</p>
                            <p className={`h6 ms-4 ${dark ? "text-white" : "white"}`}><FontAwesomeIcon icon={faCheck} /> {item.message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Main;
