import React from 'react'
import IndividualBlockchain from './additionalComponents/IndividualBlockchain'
// import CryptoJS from "../../sha256";


const DistributedBlockchain = (props) => {

    let DLTData = [
        {
            user: 1,
            datas: [
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
        },
        {
            user: 2,
            datas: [
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
        },
        {
            user: 3,
            datas: [
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
        }
    ]
    // DLTData.data.map((data) =>{
    //     let value = String(data.blockNumber) + String(data.nonce) + String(data.data) + String(data.hash)
    //     let hash = CryptoJS.SHA256(value)
    //     console.log("Value of hash : ", hash)
    //     return hash
    // })

    return (
        <>
            <div>
                <h2 className='text-center mt-3'>Distributed Blockchain</h2>
            </div>

            <div className='mb-4'>
                {DLTData.map((info) => {
                    return (
                        <IndividualBlockchain info={info} />
                    )
                })}
            </div>

            { }
        </>
    )
}

export default DistributedBlockchain