import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
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
             <div className='home-container'>
                <div className="left-side">
                  
                    <Activities  activities={activities}></Activities>
                   
                </div>
                <div className="right-side">
                    <h3>hello im right side</h3>
                </div>

            </div>
        </div>
    );
};

export default Home;