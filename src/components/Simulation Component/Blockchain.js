import React from 'react'
import IndividualBlock from './additionalComponents/IndividualBlock'
import "../../CSS/blockchain.css"


const Blockchain = () => {

    let datas = [
        {
            blockNumber: 1,
            nonce: 1,
            data: "Hello1",
            hash: "12345678901"
        },
        {
            blockNumber: 2,
            nonce: 2,
            data: "Hello2",
            hash: "12345678902"
        },
        {
            blockNumber: 3,
            nonce: 3,
            data: "Hello3",
            hash: "12345678903"
        },
        {
            blockNumber: 4,
            nonce: 4,
            data: "Hello4",
            hash: "12345678904"
        },
        {
            blockNumber: 5,
            nonce: 5,
            data: "Hello5",
            hash: "12345678905"
        }
    ]

    return (
        <>
        <div>
            <h2 className='text-center mt-3'>Blockchain</h2>
        </div>
        <div className='blockchain'>
            <div className='d-flex flex-row ms-5 blockchain-width'>

                {datas.map((data) => {
                    return (

                        <IndividualBlock data={data} key={data.hash}/>
                    )
                })}
            </div>
        </div>

        </>

    )
}

export default Blockchain