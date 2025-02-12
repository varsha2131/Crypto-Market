import React from 'react'
import CryptoTable from '../components/cryptos/components/cryptotables/CryptoTable'
import Globalcryptostats from '../components/cryptos/components/cryptostats/Globalcryptostats'
import BestCryptostats from '../components/cryptos/components/cryptostats/BestCryptostats'
import CryptoFilterCard from '../components/cryptos/components/cryptostats/CryptoFilterCard'
 

const LiveMarkerts = () => {
  return (
    <div> 
      <Globalcryptostats/>
      
      <BestCryptostats/>
      <CryptoTable/>
      <CryptoFilterCard/>
      
    </div>
  )
}

export default LiveMarkerts