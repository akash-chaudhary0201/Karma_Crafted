import React from 'react'
import lamp1 from "./Images/lamp1.jpg"
import sofa1 from "./Images/sofa1.jpg"
import cha from "./Images/cha.jpg"
import out from "./Images/out.jpg"
import bed from "./Images/bed.jpg"
import tab from "./Images/tab.jpg"


function Shop() {
    return (
        <>
            <div className="shop_main_container">
                <div className="shop_main_content">
                    <hr />
                    <div className="shop_head">
                        <h1>From empty spaces to cozy places, we've got you covered!</h1>
                    </div>
                    <hr />
                    <h2>
                        Shop by Categories
                    </h2>
                    <div className="shop_cards">
                        <div className="shop_card_content">
                            <div className="s_card" style={{ backgroundImage: `url(${lamp1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: "300px", height: "300px" }}>
                                <div className="overlay1">
                                    <div className="overlay_content">
                                        <h1>
                                            Lamps
                                        </h1>
                                        <button> Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="s_card" style={{ backgroundImage: `url(${sofa1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: "300px", height: "300px" }}>
                                <div className="overlay1">
                                    <div className="overlay_content">
                                        <h1>
                                            Sofas
                                        </h1>
                                        <button> Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="s_card" style={{ backgroundImage: `url(${cha})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: "300px", height: "300px" }}>
                                <div className="overlay1">
                                    <div className="overlay_content">
                                        <h1>
                                            Chairs
                                        </h1>
                                        <button> Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="s_card" style={{ backgroundImage: `url(${tab})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: "300px", height: "300px" }}>
                                <div className="overlay1">
                                    <div className="overlay_content">
                                        <h1>
                                            Tables
                                        </h1>
                                        <button> Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="s_card" style={{ backgroundImage: `url(${bed})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: "300px", height: "300px" }}>
                                <div className="overlay1">
                                    <div className="overlay_content">
                                        <h1>
                                            Beds
                                        </h1>
                                        <button> Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="s_card" style={{ backgroundImage: `url(${out})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: "300px", height: "300px" }}>
                                <div className="overlay1">
                                    <div className="overlay_content">
                                        <h1>
                                            Outdoor
                                        </h1>
                                        <button> Shop Now</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
