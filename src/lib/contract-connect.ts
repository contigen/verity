import { ethers } from 'ethers'
import IdentityReputationAbi from './abi/IdentityReputation.json'
import SybilDetectionFlagsAbi from './abi/SybilDetectionFlags.json'
import AIOracleBridgeAbi from './abi/AIOracleBridge.json'

const provider = new ethers.BrowserProvider(window.ethereum)
const signer = provider.getSigner()

// Contract addresses (Replace with actual addresses after deployment)
const identityReputationAddress = '0x...'
const sybilDetectionFlagsAddress = '0x...'
const aiOracleBridgeAddress = '0x...'

const identityReputationContract = new ethers.Contract(
  identityReputationAddress,
  IdentityReputationAbi,
  signer
)

const sybilDetectionFlagsContract = new ethers.Contract(
  sybilDetectionFlagsAddress,
  SybilDetectionFlagsAbi,
  signer
)

const aiOracleBridgeContract = new ethers.Contract(
  aiOracleBridgeAddress,
  AIOracleBridgeAbi,
  signer
)

export {
  identityReputationContract,
  sybilDetectionFlagsContract,
  aiOracleBridgeContract,
  provider,
}

import React, { useState, useEffect } from 'react'
import { identityReputationContract } from '../services/web3'

const ReputationSystem = () => {
  const [userAddress, setUserAddress] = useState('')
  const [reputation, setReputation] = useState('')

  const getReputation = async () => {
    const reputationScore = await identityReputationContract.getReputation(
      userAddress
    )
    setReputation(reputationScore.toString())
  }

  useEffect(() => {
    // Set user address after metamask login
    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then(accounts => {
        setUserAddress(accounts[0])
      })
  }, [])

  return (
    <div>
      <h1>Reputation Score</h1>
      <input
        type='text'
        value={userAddress}
        onChange={e => setUserAddress(e.target.value)}
        placeholder='Enter Address'
      />
      <button onClick={getReputation}>Get Reputation</button>
      {reputation && <p>Reputation: {reputation}</p>}
    </div>
  )
}

export default ReputationSystem
