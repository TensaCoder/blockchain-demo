import React, { useState, useContext } from 'react'
import Information from '../Information'
import data from '../../data/AsymmetricInfo'


const Asymmetric = () => {

  // const [privateKey, setPrivateKey] = useState("bdeefc701f4b228e2331c6984396ab2c37b8e3f7c6452b80")
  // const [publicKey, setPublicKey] = useState("413fea4381dcd282700e2a6323a526bdd79623d6186f08f8e4a710fa770bda82be8e75db0f160140486edc501509ad0c")

  const privateKey = "bdeefc701f4b228e2331c6984396ab2c37b8e3f7c6452b80"
  const publicKey = "413fea4381dcd282700e2a6323a526bdd79623d6186f08f8e4a710fa770bda82be8e75db0f160140486edc501509ad0c"


  return (
    <>
      <div className='container'>
      <h2 className='mt-4'>Asymmetric Cryptography</h2>

        <form className='mt-4'>
          <div className="mb-3">
            <label htmlFor="privateKey" className="form-label">Private Key</label>
            <i></i>
            <input type="text" className="form-control" id="privateKey" disabled="true" value={privateKey} />
            <div className="form-text">Never share your Private Key with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="publicKey" className="form-label">Public Key</label>
            <input type="text" className="form-control" id="publicKey" disabled="true" value={publicKey} />
            <div className="form-text">Public Key will be available to everyone.</div>
          </div>

          {/* <button type="submit" className="btn btn-primary">Submit</button> */}
        </form>

      </div>


      <div className='container mt-5'>
        <h3>Information</h3>

        {data.map(item => {
          return (
            <Information title={item.title} information={item.information} />
          )
        })}
        {/* <Information /> */}
      </div>

    </>
  )
}

export default Asymmetric