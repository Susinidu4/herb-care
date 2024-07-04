import React, { useState } from 'react';
import "./AboutUs.css";
import Footer from '../../../components/common/footer/footer';
import Header from '../../../components/common/header/header';

function AboutUs(){

    return (
        <>
        <Header></Header>
        <div>
            
            <div className="AboutUs_title_card">
                <h3 className="AboutUs_title">About Us</h3>
                <p className="GiftPack_display_header">Quick  -  Easy  -  The best</p>
                <p className="GiftPack_display_header">From Us</p>
            </div>

            <div className='aboutUs_description'>
                <div className='aboutUs_image'>
                    <img src={require(`../../../../../frontend/src/Images/aboutUs/img1.png`)} alt="" />
                </div>
                <div className='aboutUs_details'>
                    <h6>About Us</h6>
                    <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                    <p>Lorem ipsum dolor sit aimet counsectetur. Risus eriat pelilentesouque dictumst proin in duis amet quam. Nunc et amet convallis eget tortor purus. Pharetra diam ultricies scelerisque iaculis aliquam massa egestas enim bibendum.</p>
                    <div className="button-aboutUs">
                        <button className="btn">Lorem ipsum</button>
                    </div>
                </div>
            </div>


            <div className='AboutUs_Brands'>

            </div>

            <div className='AboutUs_Catogories'>

            </div>


            <div className='AboutUs_sevices'>
                <br></br>
                <br></br>
                <br></br>
                <h2>Lorem ipsum dolor sit amet consectetur</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Porttitor varius quam faucibus. Lectus pellentesque interdum.</p>
                <br></br>

                <div className="AboutUs_Containor">
                    <div className="AboutUs_card1">
                        <p>100% Herbal Products</p>
                    </div>

                    <div className="AboutUs_card1">
                        <p>100% Natural</p>
                    </div>

                    <div className="AboutUs_card1">
                        <p>24/7</p>
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>

            <div className='AboutUs_WhyChooseUs'>

            </div>

            <div className='AboutUs_Services2'>
                {/* <div className="Service_Containor">
                    <div className="Service_card1">
                        <p>100% Herbal Products</p>
                    </div>

                    <div className="Service_card2">
                        <p>100% Natural</p>
                    </div>

                    <div className="Service_card3">
                        <p>24/7</p>
                    </div>

                    <div className="Service_card4">
                        <p>24/7</p>
                    </div>
                </div> */}
            </div>

            <br></br>
            <Footer></Footer>
        </div>

      </>
    )
}

export default AboutUs;





