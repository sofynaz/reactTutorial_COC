import React, { useState } from 'react'

const BgChanger = () => {
    const [color, setColor] = useState('pink');



    return (
        <>

            <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
                <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2" >
                    <div className="flex flex-wrap justify-center gap-6 shadow-lg bg-white py-2  px-4 rounded-3xl">
                        <button onClick={() => setColor('red')} className='outline-none bg-red-500 rounded-lg py-1 px-4 shadow-lg'>Red</button>
                        <button onClick={() => setColor('purple')} className='outline-none bg-purple-500 rounded-lg py-1 px-4 shadow-lg'>Purple</button>
                        <button onClick={() => setColor('#C4E4FF')} className='outline-none bg-blue-500 rounded-lg py-1 px-4 shadow-lg' >Blue</button>
                        <button onClick={() => setColor('#C5FF95')} className='outline-none bg-green-500 rounded-lg py-1 px-4 shadow-lg' >Green</button>
                        <button onClick={() => setColor('#D6589F')} className='outline-none bg-pink-500 rounded-lg py-1 px-4 shadow-lg' >Pink</button>
                        <button onClick={() => setColor('#D20062')} className='outline-none bg-red-700 rounded-lg py-1 px-4 shadow-lg' >Mahroom</button>
                        <button onClick={() => setColor('#FBA834')} className='outline-none bg-yellow-600 rounded-lg py-1 px-4 shadow-lg' >yellow</button>

                    </div>
                </div>
            </div>
        </>

    )
}

export default BgChanger
