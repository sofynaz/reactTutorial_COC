import React, { useCallback, useEffect, useRef, useState } from 'react'

const PassWordGen = () => {
    const [length, setLength] = useState(8);
    const [number, setNumber] = useState(false);
    const [character, setCaracter] = useState(false);
    const [password, setPasWord] = useState('');
    const passwordRef = useRef(null)

    const copyPasswordToClipBoard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.selectionRange(0,25);
        window.navigator.clipboard.writeText(password);

    }, [password])

    const passWordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (number) str += '123456789';
        if (str) str += '~!@#$%^&*()_{}+=';
        for (let i = 1; i <= length; i++) {
            let randomChar = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(randomChar);
            console.log(pass);
        }
        setPasWord(pass)
    }, [length, number, character, setPasWord])

    useEffect(() => {
        passWordGenerator()
    }, [length, character, number, passWordGenerator])

    return (
        <>

            <div className="w-full bg-slate-600  max-w-lg mx-auto shadow-md rounded-lg px-5 py-6  my-8 text-orange-500">
                <h1 className='text-center text-white my-2 text-3xl'>Password Generator</h1>
                <div className='flex shadow rounded-lg overflow-hidden mb-5'>
                    <input type="text"
                        value={password}
                        className='w-full py-2 px-4  outline-none font-bold'
                        placeholder='Password'
                        readOnly
                        ref={passwordRef} />
                    <button onClick={copyPasswordToClipBoard} className='font-bold text-white text-lg outline-none bg-blue-500 px-2 py-0.5 shrink-0 '>Copy</button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <div className="flex items-center gap-x-1" >
                        <input type="range"
                            min={6}
                            max={100}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                        <label className='text-lg' htmlFor="length">length:{length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox" defaultChecked={number} id='numberInput' onChange={() => { setNumber((prev) => !prev) }} />
                        <label className='text-lg' htmlFor="numberInput">Numbers</label>

                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox" defaultChecked={character} id='character' onChange={() => { setCaracter((prev) => !prev) }} />
                        <label className='text-lg' htmlFor="character">Characters</label>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PassWordGen
