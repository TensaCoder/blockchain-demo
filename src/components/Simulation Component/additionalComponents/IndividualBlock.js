import React from 'react'

const IndividualBlock = (props) => {

    const { data } = props;

    return (
        <>
            <form className='mt-2 block p-4 me-5'>

                {/* Block Number */}
                <div className="mb-3 ">
                    <div className='hash-block d-flex'>
                        <label htmlFor="publicKey" className="form-label p-2 me-4 mb-0 label-css">Block:</label>
                        {/* <span className='d-flex align-items-center px-2'>#</span> */}
                        <input type="text" className="form-control my-2" id="publicKey" value={data.blockNumber}/>
                    </div>
                </div>

                {/* Block Nonce */}
                <div className="mb-3 mt-4">
                    <div className='hash-block d-flex'>
                        <label htmlFor="publicKey" className="form-label p-2 me-4 mb-0 label-css">Nonce:</label>
                        <input type="text" className="form-control my-2" id="publicKey" value={data.nonce} />
                    </div>
                </div>

                {/* Block Data */}
                <div className="mb-3">
                    <div className='hash-block d-flex'>
                        <label htmlFor="privateKey" className="form-label p-2 me-4 mb-0 label-css">Data:</label>
                        {/* <input type="text" className="form-control hashInput align-top" id="privateKey" /> */}
                        <textarea type="text" className="form-control hashInput my-2" id="privateKey" value={data.data}> </textarea>

                    </div>
                </div>

                {/* Block Hash */}
                <div className="mb-3 mt-4">
                    <div className='hash-block d-flex'>
                        <label htmlFor="publicKey" className="form-label p-2 me-4 mb-0 label-css">Hash:</label>
                        <input type="text" className="form-control" id="publicKey" value={data.hash}/>
                    </div>

                    {/* <div className="form-text">Public Key will be available to everyone.</div> */}
                </div>
            </form>
        </>

    )
}

export default IndividualBlock