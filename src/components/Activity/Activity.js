import React from 'react';
import "./Activity.css"
const Activity = ({activity}) => {
    console.log(activity)
    const {name,image,detail,age,time} = activity;
    return (
        <div>
            <div className='card-container'>
                <img src={image} alt="" />
                <h1 className='text-3xl py-2'>{name}</h1>
                <p className='text-xl'>{detail}</p>
                <p><small>age:{age}</small></p>
                <h3 className='text-2xl py-2'>Time:{time}m</h3>
                <button className='add-btn text-white rounded-md text-xl'>Add to list </button>
            </div>
        </div>
    );
};

export default Activity;