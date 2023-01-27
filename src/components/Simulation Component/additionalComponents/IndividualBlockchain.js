import React from 'react'
import IndividualBlock from './IndividualBlock';


const IndividualBlockchain = (props) => {

    const { info } = props;

    return (
        <>
            <h3 className='ms-4 ps-4 mb-0'>User {info.user}</h3>
            <div className='blockchain mb-3 pb-4'>
                <div className='d-flex flex-row ms-5 blockchain-width'>

                    {info.datas.map((data) => {
                        return (

                            <IndividualBlock data={data} key={data.hash} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default IndividualBlockchain