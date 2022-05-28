import React from 'react';
import './Homepage.css'
export default function NavigateBarHomepage(){
    return(
        <div className='TopNav'>
            <div className='container-fluid top-nav'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <img src={require('./Img/traveloka.png')} className="traveloka-icon"></img>
                    </div>
                    <div className='row line'>
                        <div className='col-sm-5' style={{paddingLeft:0+"px",width:50+"%",textAlign:"center"}}>
                            Why Partner with traveloka?
                        </div>
                        <div className='col-sm-5' style={{}}>
                            How to Partner
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
