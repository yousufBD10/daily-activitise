import React from 'react';

const Utilities = ({addTime,breakTime}) => {
    let activityTime = 0;
    for(const time of addTime){
        activityTime = activityTime + time.time;
     
    } 
    return (
        <div>
            
           
            <div>
                <h1 className='my-5 lg:text-4xl text-xl lg:px-8'>Activity Details</h1>
                <h1 className='bg-red-400 p-2 rounded text-xl lg:text-3xl lg:px-8'>Activity Details : {activityTime}m </h1>
         <h1 className='bg-red-400 mt-3 p-2 rounded lg:text-3xl lg:px-8'>Break Time : {breakTime}m </h1>
                

            </div>
        </div>
    );
};

export default Utilities;