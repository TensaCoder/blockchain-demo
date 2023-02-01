import React, { useState } from 'react'
import { sha3 } from 'hash-wasm'

const Block = () => {

  const [blockNumber, setBlockNumber] = useState("10")
  const [blockNonce, setBlockNonce] = useState("1")
  const [blockData, setBlockData] = useState("A->B = 1000 B->C = 200 B->D = 200 C->D = 100")
  const [blockHash, setBlockHash] = useState("77291a5569f05b939440905f37de505a25209e0f")


  let calculateHash = async(number, data, hash) =>{
    let val = ""
    let nonce = 0;
    console.log(number,  data, hash)
    let temp = hash.substring(0,4)
    console.log(temp)
    // eslint-disable-next-line
    while (temp != "0000"){
      nonce = nonce + 1
      val = String(number) + String(nonce) + data + hash
      console.log(val)
      hash = await sha3(val, 256);
      console.log(hash)
      temp = hash.substring(0,4)
      setBlockHash(hash)
    }
    setBlockNonce(nonce)
    setBlockHash(hash)
    console.log(blockHash)
  }


  let onChange = (event) => {
    // eslint-disable-next-line 
    if (event.target.name == "blockNumber"){
      setBlockNumber(event.target.value)
      calculateHash(event.target.value, blockData, blockHash)
    }
    // eslint-disable-next-line 
    else if (event.target.name == "blockNonce"){
      setBlockNonce(event.target.value)
    }
    // eslint-disable-next-line 
    else if (event.target.name == "blockData"){
      setBlockData(event.target.value)
    }
    // eslint-disable-next-line 
    else if (event.target.name == "blockHash"){
      setBlockHash(event.target.value)
    }
  }



  return (
    <>
      <div className='container mx-auto'>
        <h2 className='mt-4'>Block</h2>


        <form className='mt-2 block p-4 me-5'>

          {/* Block Number */}
          <div className="mb-3 ">
            <div className='hash-block d-flex'>
              <label htmlFor="publicKey" className="form-label p-2 me-4 mb-0 label-css">Block:</label>
              {/* <span className='d-flex align-items-center px-2'>#</span> */}
              <input type="text" className="form-control my-2" id="publicKey" name='blockNumber' value={blockNumber} onChange= {onChange}/>
            </div>
          </div>

          {/* Block Nonce */}
          <div className="mb-3 mt-4">
            <div className='hash-block d-flex'>
              <label htmlFor="publicKey" className="form-label p-2 me-4 mb-0 label-css">Nonce:</label>
              <input type="text" className="form-control my-2" id="publicKey" name='blockNonce'  defaultValue={blockNonce} onChange= {onChange}/>
            </div>
          </div>

          {/* Block Data */}
          <div className="mb-3">
            <div className='hash-block d-flex'>
              <label htmlFor="privateKey" className="form-label p-2 me-4 mb-0 label-css">Data:</label>
              {/* <input type="text" className="form-control hashInput align-top" id="privateKey" /> */}
              <textarea type="text" className="form-control hashInput my-2" id="privateKey" name='blockData'  value={blockData} onChange= {onChange}> </textarea>

            </div>
          </div>

          {/* Block Hash */}
          <div className="mb-3 mt-4">
            <div className='hash-block d-flex'>
              <label htmlFor="publicKey" className="form-label p-2 me-4 mb-0 label-css">Hash:</label>
              <input type="text" className="form-control" id="publicKey" name='blockHash' defaultValue={blockHash} onChange= {onChange}/>
            </div>

            {/* <div className="form-text">Public Key will be available to everyone.</div> */}
          </div>
        </form>

      </div>
    </>
  )
}

export default Block