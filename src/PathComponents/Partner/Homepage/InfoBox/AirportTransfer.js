import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Homepage.css';
export default function AirportTransfer(){
    return(
        <div className='box-info-service'>  
            <h5>
                Take your accommodation into a larger market
            </h5>
            <div className="box-info-left">
              
                <p>
                    Whether it's guest traveling to airport or pickup at airport station.
                    Traveloka makes any type of your property simple and secure to host.
                    Get a broader exposure for your AirportTransfer and boost your occupancy
                    rate like never before.
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
                    <p className='text-range'>Help your Airport Transfer stand out by customized campaign for the right crowd and be ready for the new normal with contactless payment and in-app order.</p>
               </div>
              
            </div>
         
        </div>
    )
}