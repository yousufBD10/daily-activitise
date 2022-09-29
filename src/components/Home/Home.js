import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Myinfo from '../MyInfo/Myinfo';
import Utilities from '../Utilities/Utilities';
import './Home.css'
const Home = () => {
    const [activities,setActivities] = useState([]);
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data =>setActivities(data) )
    },[]);
  
    return (
        <div>
             <h1 className='text-center text-6xl '>Daily Activities</h1>
             <div className='home-container grid grid-cols-12 '>
                <div className="left-side cols-span-9">
                  
                    <Activities  activities={activities}></Activities>
                   
                </div>
                <div className="right-side cols-3 border-3">
                  <div className='border shadow-zinc-500 p-5'>
                  <Myinfo></Myinfo>
                   <Utilities></Utilities>
                  </div>
                </div>

            </div>
        </div>
    );
};

export default Home;