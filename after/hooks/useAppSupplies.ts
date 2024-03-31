import React, {useState} from 'react'

const useAppSupplies = (initialValue: boolean) => {

  const [supplies, setSupplies] = useState({})
  const [suppliesChain, setSuppliesChain] = useState({})
  const [allSupplies, setAllSuplies] = useState({})

  function fetchSupplies () {
    if(!initialValue) {
      //logic to fetch supplies
    }
  }


  return {
    supplies, allSupplies,setSuppliesChain,suppliesChain,fetchSupplies
  }
}

export default useAppSupplies