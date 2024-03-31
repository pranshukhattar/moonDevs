import React from 'react'

import { BurnTxProgress } from '../../enums/BurnPage';
import DashboardLayoutStyled from './styled/DashboardLayoutStyled';
import  {BurnPageProvider, BurnPageContext } from './context/BurnPageContextProvider';

export const BurnPage = () => {

  const { openChainSelector, setOpenChainSelector, openChainSelectorModal } = useChainSelector();

  
  return (
    <BurnPageProvider>
      <BurnPageContext.Consumer value>
        <DashboardLayoutStyled />
        <ChainSelector
          title={"Switch Token Chain"}
          openChainSelector={openChainSelector}
          setOpenChainSelector={setOpenChainSelector}
          chains={receiveChains}
          selectedChain={suppliesChain}
          setSelectedChain={setSuppliesChain}
        />
        <AppToast
          position={{ vertical: "bottom", horizontal: "center" }}
          message={toastMsg}
          severity={toastSev}
        />
      </BurnPageContext.Consumer>
    </BurnPageProvider>
  );
};
