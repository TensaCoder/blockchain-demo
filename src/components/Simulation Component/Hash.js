import React, {useState} from 'react'
import '../../CSS/hash.css'

const Hash = () => {

    const [hashValue, setHashValue] = useState("")
    const [dataInput, setDataInput] = useState("")


    return (
        <>
            <div className='container mx-auto width-setting'>
                <h2 className='mt-4'>Hash</h2>


                <form className='mt-4 container'>
                    <div className="mb-3">
                        <div className='hash-block'>
                        <label htmlFor="privateKey" className="form-label">Data</label>
                        <input type="text" className="form-control hashInput align-top" id="privateKey" value={dataInput}/>

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