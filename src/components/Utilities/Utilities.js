import React from 'react';

const Utilities = () => {
    return (
        <div>
            <div>
                <h1 className='text-3xl  mx-9'>Add A Break</h1>
                <div className='flex p-4 m-3'>
                    <button className='bg-blue-300
                    px-6 py-2 text-white bold text-xl mx-3'>20m</button>
                    <button className='bg-blue-300
                    px-6 py-2 text-white bold text-xl mx-3'>30m</button>
                    <button className='bg-blue-300
                    px-6 py-2 text-white bold text-xl mx-3'>45m</button>
                    <button className='bg-blue-300
                    px-6 py-2 text-white bold text-xl mx-3'>60m</button>

                </div>
            </div>
            <div>
                <h1 className='my-5 text-4xl px-8'>Activity Details</h1>
                <h1 className='bg-red-400 p-2 rounded text-3xl px-8'>Activity Details : </h1>
                <h1 className='bg-red-400 mt-3 p-2 rounded text-3xl px-8'>Activity Details : </h1>
                

            </div>
        </div>
    );
};

export default Utilities;