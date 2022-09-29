import React from 'react';

const Utilities = ({addTime,breakTime}) => {
    let activityTime = 0;
    for(const time of addTime){
        activityTime = activityTime + time.time;
     
    } 
    return (
        <div>
            
           
            <div>
                <h1 className='my-5 text-4xl px-8'>Activity Details</h1>
                <h1 className='bg-red-400 p-2 rounded text-3xl px-8'>Activity Details : {activityTime}m </h1>
         <h1 className='bg-red-400 mt-3 p-2 rounded text-3xl px-8'>Break Time : {breakTime}m </h1>
                

            </div>
        </div>
    );
};

export default Utilities;