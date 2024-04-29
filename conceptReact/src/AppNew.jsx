import React from 'react'
// import BgChanger from './component/BgChanger'
import PassWordGen from './component/PassWordGen'
// import UseStatePrac from './component/UseState1';
// import Card from './component/PropsPro';

const AppNew = () => {
    const myObj ={
        name:"sichan"
    }
    return (
        <>
        <div> 
            {/* <div className="grid grid-cols-1 mx-48">
                <div className="cols flex flex-row">
                    <UseStatePrac />
                </div>
                // props property
                <div className="cols flex flex-row mt-20 ">
                    <Card channel='naznee@comedy' myArr={myObj} />
                </div>
            </div> */}

            <BgChanger/>

            {/* <PassWordGen/> */}

        </div>

            


        </>
    )
}

export default AppNew
