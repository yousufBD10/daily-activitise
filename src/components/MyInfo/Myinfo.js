import React from 'react';

const Myinfo = () => {
    return (
        <div className='myinfo p-4'>
           <div className='flex '>
           <img className='w-1/4 ml-3 rounded-full' src={require("../image/mypic.jpg")} alt="" />
           <div className='ml-16'>
           <h2 className="text-5xl ">Yousuf Ali</h2>
           <h3 className="text-3xl ">Pabna, Bangladesh</h3>
          
           </div>
           </div>
           <div className='flex m-5 w-100% bg-slate-50'>
           <p className='text-xl m-2 p-2 bg-slate-200 rounded-md '>Age: 23 years</p>
           <p className='text-xl m-2 p-2 bg-slate-200 rounded-md '>Wight: 56 kg</p>
           <p className='text-xl m-2 p-2 bg-slate-200 rounded-md '>Height: 5.6"</p>
           </div>

        </div>
    );
};

export default Myinfo;