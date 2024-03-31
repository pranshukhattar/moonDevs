import React, {useState} from 'react'

const useWallet = () => {

  const[walletAddress, setWalletAddress] = useState()
  const[isWalletConnected, setIsWalletConnected] = useState()
  const[isBalanceError, setIsBalanceError] = useState()
  const[walletBalance, setWalletBalance] = useState()
  const[walletChain, setWalletChain] = useState()
  const[chains, setChains] = useState()


  const openChainModal = () => {
    //logic to open chain modal
  }

  const openConnectModal = () => {
    // logic to open connect modal
  }

  return { 
      walletAddress,
      isWalletConnected,
      walletBalance,
      isBalanceError,
      openChainModal,
      walletChain,
      chains,
      openConnectModal,
    }
  
}

export default useWallet