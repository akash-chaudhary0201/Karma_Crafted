import React from 'react'
import lamp1 from "./Images/sofa1.jpg"
import lamp2 from "./Images/sofa2.jpg"
import lamp3 from "./Images/sofa3.jpg"

function Sofas() {
    return (
        <>
            <div className="lamps_main_container sofas_container">
                <div className="lamps_content">
                    <hr />
                    <h1>
                        Sofas :- <span>New Arrival</span>
                    </h1>
                    <hr />
                    <div className="lamps_cards">
                        <div className="lamp" style={{ backgroundImage: `url(${lamp1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: "300px", height: "300px" }}>

                            <div className="card_content">
                                <h2>
                                    Sofa 1
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
                                    Sofa 2
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
                                    Sofa 3
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

export default Sofas
