import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Myinfo from '../MyInfo/Myinfo';
import Swal from 'sweetalert2'
import Utilities from '../Utilities/Utilities';
import './Home.css'
import Question from '../Question/Question';
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
     
    };
    const activityBtn = ()=>{
     
   
      Swal.fire(
        'Activity Complete',
        'Have a nice day.',
        'success'
      )
    }
    
  
    return (
        <div>
            <div className='flex justify-center my-6  '>
            <img className='w-16' src={require("../image/logo.png")} alt="" srcset="" />
            <h1 className=' text-6xl text-orange-500 font-bold ms-2'> Daily Activities</h1>
            </div>

            
             <div className='home-container'>
                <div className='left-side '>
                {
                      activities.map((activity)=>
                      (  <Activities addToTime={()=>addToTime(activity)} activities={activity}></Activities> )
                )
              }
               
                 
                   
                </div>
                <div className="right-side  ">
                  
                  <div className='border shadow-zinc-500'>
                  
                    <Myinfo></Myinfo>
                    <div>
                <h1 className='text-3xl  mx-9'>Add A Break</h1>
                <div className='flex  m-3'>
                    <button  onClick={()=>timeBreak(20)} className='bg-blue-300 hover:bg-blue-400 rounded-lg font-bold
                    px-6 py-2 text-white bold text-xl mx-3'>20m</button>
                    <button onClick={()=>timeBreak(30)} className='bg-blue-300 hover:bg-blue-400 rounded-lg font-bold
                    px-6 py-2 text-white bold text-xl mx-3'>30m</button>
                    <button onClick={()=>timeBreak(45)} className='bg-blue-300 hover:bg-blue-400 rounded-lg font-bold
                    px-6 py-2 text-white bold text-xl mx-3'>45m</button>
                    <button onClick={()=>timeBreak(60)} className='bg-blue-300 hover:bg-blue-400 rounded-lg font-bold
                    px-6 py-2 text-white bold text-xl mx-3'>60m</button>

                </div>
            </div>
                   <Utilities breakTime={breakTime}  addTime={addTime}></Utilities>
                   <button className='w-full rounded-xl hover:bg-green-600 mt-7 text-white font-bold text-2xl bg-green-500 py-3 ' onClick={()=>activityBtn()}>Activity Complete</button>

            </div>
                  </div>
                </div>
               <div className=' p-8 w-full flex justify-center'>
               <Question></Question>
               </div>

          </div>

       
    );
};

export default Home;