import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Homepage.css';
export default function Restaurant(){
    return(
        <div className='box-info-service'>  
            <h5>
                Take your accommodation into a larger market
            </h5>
            <div className="box-info-left">
                <p>
                    Bring the delicacies in your culinary business to life with Traveloka.
                    If you have a restaurant, a coffee shop, or a cafe, Traveloka ensures
                    that your business stands out.
                </p>
                <Link to="/Partner/SecondHomePage">
                    <button className='button-get-started'>
                        Get Started
                    </button>
                </Link>
            </div>
            <div className="box-info-right">
               <div>
                    <FontAwesomeIcon icon={faCircleCheck} size="1x"/><p style={{display:"inline-block",fontWeight:"bold",marginLeft:"4px",fontSize:"23px"}}>Treats and Order-in-App</p>
                    <p className='text-range'>Help your restaurant stand out by customized campaign for the right crowd and be ready for the new normal with contactless payment and in-app order.</p>
               </div>
              
            </div>
         
        </div>
    )
}