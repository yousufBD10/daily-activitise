import React from 'react';
import Activity from '../Activity/Activity';
import "./Activities.css"
const Activities = ({activities}) => {
    console.log(activities)
    return (
        <div className='activities-container '>
            {
                activities.map((activity) =>
            
                   ( <Activity key={activity.id} activity={activity}></Activity>)
                )
            }
        </div>
    );
};

export default Activities;