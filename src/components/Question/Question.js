import React from 'react';

const Question = () => {
    return (
        <div className='mt-16 '>
            <div className='bg-gray-100 my-8 lg:p-24 p-3 shadow-lg'>
                <h2 className='lg:text-5xl font-bold mb-7'>What is React and how its work?</h2>
                <p className='lg:text-2xl'>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.
                </p>
            </div>
            <div className='bg-gray-100 my-8 lg:p-24 p-3 shadow-lg'>
                <h2 className='lg:text-5xl font-bold mb-7'>What are the differences between props and state?</h2>
                <p className='lg:text-2xl'>In React, the developers build basic components and then use those basic components to build larger components, leading to a complete web page. While building these components, two important data manipulation methods are the state and props.

Both the props and the state decide what data the component will display. They are simple Javascript objects that will re-render the component every time they change.
Initially, both the props and the state can have default values or receive values from a parent component. <br />
 <span className='font-bold'>State</span><br />
The state is a set of variables that determine the current condition of the component. The state of a component is internal, i.e., defined inside the component and changeable only within the component. Any change in state renders the component again.
In class-based components, the state of a component is defined as an object in its constructor, as shown in the code snippet below:
In the above snippet of code, we add a property called name to the components state User. To change the state, we use the setState function.
<br />
 <span className='font-bold'>Props</span><br />

Props is short for properties. It is the set of attributes that are passed from a parent component to a child component. These can be data variables or functions.
Props are primarily used to communicate between parent and child components. Moreover, props cannot be altered inside the child component.
We pass the keyword props as a parameter to the function to access props in a function-based component.

                </p>
            </div>
            <div className='bg-gray-100 my-8 lg:p-24 p-3 shadow-lg'>
                <h2 className='lg:text-5xl font-bold mb-7'>How does the useEffect hook work in React?</h2>
                <p className='lg:text-2xl'>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.useEffect() hook runs the side-effect after initial rendering, and on later renderings only if the name value changes.The useEffect Hook Usages. The callback function we pass to the useEffect hook runs the side effects. React runs it on every render of a component by default.By default useEffect will trigger anytime an update happens to the React component. This means if the component receives new props from its parent component or even when you change the state locally, the effect will run again
                </p>
            </div>


        </div>
    );
};

export default Question;