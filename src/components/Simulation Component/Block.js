import React, { useState } from 'react'

const Block = () => {

  const [blockNumber, setBlockNumber] = useState("")
  const [blockNonce, setBlockNonce] = useState("")
  const [blockData, setBlockData] = useState("")
  // const [blockPreviousHash, setBlockPreviousHash] = useState("")
  const [blockHash, setBlockHash] = useState("")

  return (
    <>
      <div className='container mx-auto width-setting'>
        <h2 className='mt-4'>Block</h2>


        <form className='mt-4 container block p-4 width-setting'>

          {/* Block Number */}
          <div className="mb-3 ">
            <div className='hash-block d-flex'>
              <label htmlFor="publicKey" className="form-label p-2 me-4 mb-0 label-css">Block:</label>
              {/* <span className='d-flex align-items-center px-2'>#</span> */}
              <input type="text" className="form-control my-2" id="publicKey" value={blockNumber} />
            </div>
          </div>

          {/* Block Nonce */}
          <div className="mb-3 mt-4">
            <div className='hash-block d-flex'>
              <label htmlFor="publicKey" className="form-label p-2 me-4 mb-0 label-css">Nonce:</label>
              <input type="text" className="form-control my-2" id="publicKey" />
            </div>
          </div>

          {/* Block Data */}
          <div className="mb-3">
            <div className='hash-block d-flex'>
              <label htmlFor="privateKey" className="form-label p-2 me-4 mb-0 label-css">Data:</label>
              {/* <input type="text" className="form-control hashInput align-top" id="privateKey" /> */}
              <textarea type="text" className="form-control hashInput my-2" id="privateKey" > </textarea>

            </div>
          </div>

          {/* Block Hash */}
          <div className="mb-3 mt-4">
            <div className='hash-block d-flex'>
              <label htmlFor="publicKey" className="form-label p-2 me-4 mb-0 label-css">Hash:</label>
              <input type="text" className="form-control" id="publicKey" />
            </div>

            {/* <div className="form-text">Public Key will be available to everyone.</div> */}
          </div>


        </form>
      </div>
    </>
  )
}

export default Block