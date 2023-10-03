import React from 'react'
import lamp1 from "./Images/lamp1.jpg"
import lamp2 from "./Images/lamp2.jpg"
import lamp3 from "./Images/lamp3.jpg"

function Lamps() {
    return (
        <>
            <div className="lamps_main_container">
                <div className="lamps_content">
                    <h1>
                        Lamps :- <span>New Arrival</span>
                    </h1>
                    <div className="lamps_cards">
                        <div className="lamp" style={{ backgroundImage: `url(${lamp1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: "300px", height: "300px" }}>

                            <div className="card_content">
                                <h2>
                                    Lamp 1
                                </h2>
                                <div className="btns">
                                    <i class="fa-solid fa-heart"></i>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                            </div>

                        </div>
                        <div className="lamp" style={{ backgroundImage: `url(${lamp2})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: "300px", height: "300px" }}>
                            <div className="card_content">
                                <h2>
                                    Lamp 2
                                </h2>
                                <div className="btns">
                                    <i class="fa-solid fa-heart"></i>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                            </div>
                        </div>
                        <div className="lamp" style={{ backgroundImage: `url(${lamp3})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: "300px", height: "300px" }}>
                            <div className="card_content">
                                <h2>
                                    Lamp 3
                                </h2>
                                <div className="btns">
                                    <i class="fa-solid fa-heart"></i>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button>Show More</button>
                </div>

            </div>
        </>
    )
}

export default Lamps
