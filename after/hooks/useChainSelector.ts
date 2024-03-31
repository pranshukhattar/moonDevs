import React, {useState} from 'react'

const useChainSelector = () => {
  const [openChainSelector, setOpenChainSelector] = useState()

  const openChainSelectorModal = () => {
      // logic to open chain selector modal
  }
  

  return { openChainSelector, setOpenChainSelector, openChainSelectorModal }
}

export default useChainSelector