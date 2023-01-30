import React, { useState } from 'react'
import '../../CSS/hash.css'

import { Sha256 } from '@aws-crypto/sha256-browser';

const Hash = () => {
    // eslint-disable-next-line
    const [dataInput, setDataInput] = useState("hello")
    // eslint-disable-next-line
    const [hashValue, setHashValue] = useState("")

    // eslint-disable-next-line
    let onChange = (event) => {
        console.log();
    }
    
    
    const hash = new Sha256();
    // hash.update('hello');
    const res = async() =>{
        // let result = await hash.digest();
        let result = await hash.digest(hashValue);

        const decoder = new TextDecoder("hex");
        let decodedMessage = decoder.decode(result);
        console.log(decodedMessage)
        setHashValue(decodedMessage)

        // console.log(result)
        // setHashValue(result)
    } 

    res();
    


    return (
        <>
            <div className='container mx-auto width-setting'>
                <h2 className='mt-4'>Hash</h2>


                <form className='mt-4 container'>
                    <div className="mb-3">
                        <div className='hash-block'>
                            <label htmlFor="privateKey" className="form-label">Data</label>
                            <input type="text" className="form-control hashInput align-top" id="privateKey" value={dataInput} />

                        </div>
                        {/* <div className="form-text">Never share your Private Key with anyone else.</div> */}
                    </div>

                    <div className="mb-3 mt-4">
                        <div className='hash-block'>
                            <label htmlFor="publicKey" className="form-label">Hash Value</label>
                            <input type="text" className="form-control" id="publicKey" value={hashValue} />
                        </div>

                        {/* <div className="form-text">Public Key will be available to everyone.</div> */}
                    </div>


                </form>
            </div>
        </>
    )
}

export default Hash