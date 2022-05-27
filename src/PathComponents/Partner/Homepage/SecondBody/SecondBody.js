import React from 'react';
import "../Homepage.css"
export default function SecondBody(){
    return(
        <div className='partner-body'>
            <div className='old-parent-secondbody-homepage'>
                <div className='parent-secondbody-homepage'>
                    <div className='left-sidebar-img'>
                        <img className='slide-first-img' src={require('../Img/secondbody_first_img.png')}/>
                    </div>
                    <div className='right-sidebar-info'>
                        <h4 className='second-body-title'>Take Your Business to the Next Level</h4>
                        <div className='first-info-second-body'>
                            <div>
                                <img className='set-img-size-secondbody' src={require('../Img/secondbody_second_img.png')}/>
                            </div>
                            <div className='set-height-width-content'>
                                <h5>Broader Exposure</h5>
                                <p>Expand your business by reaching our customers in APAC region and beyond.</p>
                            </div>
                        </div>
                        <div className='first-info-second-body'>
                            <div>
                                <img className='set-img-size-secondbody' src={require('../Img/secondbody_third_img.png')}/>
                            </div>
                            <div className='set-height-width-content'>
                                <h5>Broader Exposure</h5>
                                <p>Expand your business by reaching our customers in APAC region and beyond.</p>
                            </div>
                        </div>
                        <div className='first-info-second-body'>
                            <div>
                                <img className='set-img-size-secondbody' src={require('../Img/secondbody_fourth_img.png')}/>
                            </div>
                            <div className='set-height-width-content'>
                                <h5>Broader Exposure</h5>
                                <p>Expand your business by reaching our customers in APAC region and beyond.</p>
                            </div>
                        </div>
                        <div className='first-info-second-body'>
                            <div>
                                <img className='set-img-size-secondbody' src={require('../Img/secondbody_fifth_img.png')}/>
                            </div>
                            <div className='set-height-width-content'>
                                <h5>Broader Exposure</h5>
                                <p>Expand your business by reaching our customers in APAC region and beyond.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='old-parent-thirdbody-homepage'>
                <div className='parent-thirdbody-homepage'>
                    <div className='child-left-sidebar'>
                        <h5 className="title-thirdbody">Why You Should Collaborate with Us</h5>
                    </div>
                    <div className='child-right-sidebar'>
                        <div className='img-leftside'>
                            <img className='first-image' src={require('../Img/thirdbody_first_img.png')}/>
                            <div className='first-image-content'>
                                <p className='first-img-title'>40mio+</p>
                                <p>app downloads worldwide (Android and iOS)</p>
                            </div>
                        </div>
                        <div className='img-top-right'>
                            <img className='second-image' src={require('../Img/thirdbody_second_img.png')} />
                            <div className='second-image-content'>
                                <p className='second-img-title'>66k+</p>
                                <p>suppliers from various industries, e.g., hospitality, F&B, beauty, etc</p>
                            </div>
                        </div>
                        <div className='img-bottom-right'>
                            <div className='child-img-bottom-left'>
                                <img className='third-image' src={require('../Img/thirdbody_third_img.png')} />
                                <div className='third-image-content'>
                                    <p className='third-img-title'>14+</p>
                                    <p>products ranging from flight tickets to music concerts</p>
                                </div>
                            </div>
                            <div className='child-img-bottom-right'>
                            <img className='fourth-image' src={require('../Img/thirdbody_fourth_img.png')} />
                                <div className='fourth-image-content'>
                                    <p className='fourth-img-title'>8</p>
                                    <p>APAC nations ready to welcome your business</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}