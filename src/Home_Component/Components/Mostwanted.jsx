import React from 'react'
import most1 from "./Images/lamp2.jpg"
import most2 from "./Images/lamp3.jpg"
import most3 from "./Images/sofa2.jpg"

function Mostwanted() {
    return (
        <>
            <div className="most_main_container">
                <div className="most_content">
                    <hr />
                    <h1>Our most <span>Wanted</span> products</h1>
                    <hr />
                    <div className="most_cards">
                        <div className="most_item">
                            <div className="most_item_img">
                                <img src={most1} alt="" />
                            </div>
                            <h2>
                                Most 1
                            </h2>
                            <i class="fa-solid fa-heart"></i>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div className="most_item">
                            <div className="most_item_img">
                                <img src={most2} alt="" />
                            </div>
                            <h2>
                                Most 2
                            </h2>
                            <i class="fa-solid fa-heart"></i>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div className="most_item">
                            <div className="most_item_img">
                                <img src={most3} alt="" />
                            </div>
                            <h2>
                                Most 3
                            </h2>
                            <i class="fa-solid fa-heart"></i>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mostwanted
