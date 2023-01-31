import React, { useState } from 'react'
import '../../CSS/hash.css'
import { sha3 } from 'hash-wasm';

const Hash = () => {

    const [dataInput, setDataInput] = useState("Change this text to see how hashing works!")

    const [hashValue, setHashValue] = useState("2ca77b8257f2d54679fe47db871d9c821d83df75dda78d4f36f607476fb28d32")
    
      let onChange = async (event) => {
        setDataInput(event.target.value)
        setHashValue(await sha3(dataInput, 256));
        console.log(hashValue);

    }

    
    return (
        <>
            <div className='container mx-auto width-setting'>
                <h2 className='mt-4'>Hash</h2>


                <form className='mt-4 container'>
                    <div className="mb-3">
                        <div className='hash-block'>
                            <label htmlFor="privateKey" className="form-label">Data</label>
                            <input type="text" className="form-control hashInput align-top" id="privateKey" value={dataInput} onChange={onChange} />

                        </div>
                        {/* <div className="form-text">Never share your Private Key with anyone else.</div> */}
                    </div>

                    <div className="mb-3 mt-4">
                        <div className='hash-block'>
                            <label htmlFor="publicKey" className="form-label">Hash Value</label>
                            <input type="text" className="form-control" id="publicKey" value={hashValue} disabled='true'/>
                        </div>

                        {/* <div className="form-text">Public Key will be available to everyone.</div> */}
                    </div>


                </form>
            </div>
        </>
    )
}

export default Hash