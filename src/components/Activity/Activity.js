import React from 'react';
import "./Activity.css"
const Activity = ({activity}) => {
    console.log(activity)
    const {name,image,detail,age,time} = activity;
    return (
        <div>
            <div className='card-container'>
                <img src={image} alt="" />
                <h1>{name}</h1>
                <p>{detail}</p>
                <p><small>age:{age}</small></p>
                <h3>Time:{time}m</h3>
                <button className='add-btn'>Add to list </button>
            </div>
        </div>
    );
};

export default Activity;