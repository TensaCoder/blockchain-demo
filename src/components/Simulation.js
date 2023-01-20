import React from 'react'
import Asymmetric from "./Simulation Component/Asymmetric"
import Block from './Simulation Component/Block'
import Hash from './Simulation Component/Hash'
import SimNavbar from './Simulation Component/SimNavbar'

import IndividualBlock from './Simulation Component/additionalComponents/IndividualBlock'
import Blockchain from './Simulation Component/Blockchain'
import DistributedBlockchain from './Simulation Component/DistributedBlockchain'

const Simulation = () => {


    return (
        <>
            {/* <div className='d-flex'>
                <SimNavbar />
            </div> */}

            {/* <div >Simulation</div> */}

            
            {/* <Asymmetric /> */}
            {/* <Hash /> */}
            {/* <Block /> */}
            

            {/* <Blockchain /> */}
            {/* <IndividualBlock /> */}

            <DistributedBlockchain />
        </>
    )
}

export default Simulation