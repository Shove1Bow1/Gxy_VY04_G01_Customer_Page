import React from 'react';
export default function ThirdBody(){
    return(
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
    )
}