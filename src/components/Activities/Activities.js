import React from 'react';
import Activity from '../Activity/Activity';
import "./Activities.css"
const Activities = ({activities,addToTime}) => {
   
    return (
        <div className='activities-container '>
          
            
                   <Activity key={activities.id} addToTime={addToTime} activity={activities}></Activity>
                
            
        </div>
    );
};

export default Activities;