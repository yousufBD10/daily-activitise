import React from 'react';
import "./Activity.css"
const Activity = (props) => {
    const {addToTime,activity} = props;
    
    const {name,image,detail,age,time} =activity;
    return (
        <div>
            <div className='card-container p-5'>
                <img src={image} alt="" />
                <h1 className='text-2xl py-2'>{name}</h1>
                <p className='text-md'>{detail}</p>
                <p><small>age:{age}</small></p>
                <h3 className='text-2xl py-1'>Time:{time}m</h3>
                <button onClick={addToTime} className='add-btn text-white rounded-md text-xl'>Add to list </button>
            </div>
        </div>
    );
};

export default Activity;