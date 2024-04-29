import { useState } from 'react'


function UseStatePrac() {

    const [counter, setCounter] = useState(15)
    // let counter = 5;

    const addValue = () => {
        // setCounter(counter + 1)
        // console.log(counter);
        // incase i want pervious count so redirect to 19count
        setCounter((pervCounter)=> pervCounter+1)
        setCounter((pervCounter)=> pervCounter+1)
        setCounter((pervCounter)=> pervCounter+1)
        setCounter((pervCounter)=> pervCounter+1)
    }
    const removeVal = () => {
        setCounter(counter - 1)

    }

    return (
        <>
            <div className="container bg-slate-50  relative  top-14 right-0 " >
                <h2 className='py-3 text-center'>Dark mode</h2>
                <h3 className='py-3 text-center font-bold'>Counter Value: {counter}</h3>
                <div className="butn  flex justify-center text-yellow-50">
                    <button className=' py-2 mx-3 px-3 bg-blue-600 rounded-full' onClick={addValue}>Add Value: {counter}</button>
                    <button className=' px-3 bg-blue-600 rounded-full' onClick={removeVal}>Decrease Value: {counter}</button>
                </div>


            </div>


        </>
    )
}

export default UseStatePrac;
