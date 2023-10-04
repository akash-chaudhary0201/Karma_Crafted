import React from 'react'
import img4 from "./Images/home_img4.jpg"
import img5 from "./Images/home_img5.jpg"
import img6 from "./Images/home_img6.jpg"
import Lamps from './Components/Lamps'
import Sofas from './Components/Sofas'
import Mostwanted from './Components/Mostwanted'

function Home() {
    return (
        <>
            <div className="section1">
                <div className="home_content">
                    <div className="home_item1">
                        <div className="item_content">
                            <div className="item_img">
                                <img src={img4} alt="" />
                            </div>
                        </div>
                        <div className="item_content">
                            <p>unleash your style with our exquisite furniture collection</p>
                        </div>
                        <div className="item_content disp">
                            <p>changing the way people design and shop for their homes</p>
                        </div>
                        <div className="item_content disp">
                            <div className="item_img">
                                <img src={img5} alt="" />
                            </div>
                        </div>
                        <div className="item_content">
                            <div className="item_img">
                                <img src={img6} alt="" />
                            </div>
                        </div>
                        <div className="item_content">
                            <p>introducing our captivating new arrivals, redefining elegance for your home.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="section2_content">
                    <div className="section2_head">
                        <h1>Let's Start building <br /> your tomorrow, today.</h1>
                    </div>
                </div>
            </div>

            <Lamps />
            <Sofas />
            <Mostwanted />
            <div className="section3">
                <div className="section3_content">
                    <div className="div">
                        <h1>
                            Hot  ♨️ <br /> Deals For You
                        </h1>
                        <p>
                            Online shopping for retail sale to the direct customers.
                        </p>
                    </div>
                    <div className="deals">
                        <div className="div1">
                            <h2>
                                1.5% Cashback
                            </h2>
                            <p>
                                Online shopping for retail sale to the direct customers.
                            </p>
                        </div>
                        <div className="div1">
                            <h2>
                                30 Days terms
                            </h2>
                            <p>
                                Online shopping for retail sale to the direct customers.
                            </p>
                        </div>
                        <div className="div1">
                            <h2>
                                Save Money
                            </h2>
                            <p>
                                Online shopping for retail sale to the direct customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section4">
                <div className="section4_content">
                    <div className="headd">
                        <h1>
                            Karma Crafted
                        </h1>
                        <p>Online Shopping for retail sale to the direct customers.</p>
                    </div>
                    <div className="links">
                        <ul>
                            <li>
                                Home
                            </li>
                            <li>
                                Shop
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                    </div>
                    <div className="socials">
                        <ul>
                            <li>
                                <i className="fa-brands fa-instagram"></i>
                            </li>
                            <li>
                                <i className="fa-brands fa-facebook"></i>
                            </li>
                            <li>
                                <i className="fa-brands fa-twitter"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer">
                <h6>All Right Reserved to Karma Crafted</h6>
                <h6>Developed by Akash and Sumit</h6>
            </div>
        </>
    )
}

export default Home
