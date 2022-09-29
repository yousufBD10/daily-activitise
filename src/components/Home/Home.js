import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Myinfo from '../MyInfo/Myinfo';

import Utilities from '../Utilities/Utilities';
import './Home.css'
const Home = () => {
    const [activities,setActivities] = useState([]);
    const [addTime,setaddTime] = useState([]);
    const [breakTime,setbreakTime] = useState([0]);
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data =>setActivities(data) )
    },[]);

    const addToTime = (activity)=>{
      
      const newTime = [...addTime,activity]
      setaddTime(newTime)
     
    };
    const timeBreak = (timer)=>{
      const newTimer = [timer]
      setbreakTime(newTimer)
      console.log(newTimer)
    }
    
  
    return (
        <div>
            <div className='flex justify-center my-6  '>
            <img className='w-16' src={require("../image/logo.png")} alt="" srcset="" />
            <h1 className=' text-6xl text-orange-500 font-bold ms-2'> Daily Activities</h1>
            </div>
            
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
                    <div>
                <h1 className='text-3xl  mx-9'>Add A Break</h1>
                <div className='flex p-4 m-3'>
                    <button  onClick={()=>timeBreak(20)} className='bg-blue-300
                    px-6 py-2 text-white bold text-xl mx-3'>20m</button>
                    <button onClick={()=>timeBreak(30)} className='bg-blue-300
                    px-6 py-2 text-white bold text-xl mx-3'>30m</button>
                    <button onClick={()=>timeBreak(45)} className='bg-blue-300
                    px-6 py-2 text-white bold text-xl mx-3'>45m</button>
                    <button onClick={()=>timeBreak(60)} className='bg-blue-300
                    px-6 py-2 text-white bold text-xl mx-3'>60m</button>

                </div>
            </div>
                   <Utilities breakTime={breakTime}  addTime={addTime}></Utilities>

            </div>
                  </div>
                </div>

            </div>

       
    );
};

export default Home;