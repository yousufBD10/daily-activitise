import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Myinfo from '../MyInfo/Myinfo';

import Utilities from '../Utilities/Utilities';
import './Home.css'
const Home = () => {
    const [activities,setActivities] = useState([]);
    const [addTime,setaddTime] = useState([]);
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data =>setActivities(data) )
    },[]);

    const addToTime = (activity)=>{
      
      const newTime = [...addTime,activity]
      setaddTime(newTime)
     
    };
    
  
    return (
        <div>
            
             <h1 className='text-center text-6xl my-6 '>Daily Activities</h1>
             <div className='home-container'>
                <div className="left-side">
                {
                      activities.map((activity)=>
                      (  <Activities addToTime={()=>addToTime(activity)} activities={activity}></Activities> )
                )
              }
               
                 
                   
                </div>
                <div className="right-side ">
                  
                  <div className='border shadow-zinc-500 p-5'>
                  
                    <Myinfo></Myinfo>
                   <Utilities addTime={addTime}></Utilities>

            </div>
                  </div>
                </div>

            </div>

       
    );
};

export default Home;