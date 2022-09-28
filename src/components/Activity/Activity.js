import React from 'react';
import "./Activity.css"
const Activity = ({activity}) => {
    console.log(activity)
    const {name,image,detail,age,} = activity;
    return (
        <div>
            <div className='card-container'>
                <img src={image} alt="" />
                <h1>{name}</h1>
                <p>{detail}</p>
                <p><small>age:{age}</small></p>
                <button className='add-btn'>Add to list </button>
            </div>
        </div>
    );
};

export default Activity;