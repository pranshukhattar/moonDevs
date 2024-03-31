import React, {useState, useEffect} from 'react'
import useWallet from '../../../hooks/useWallet';
import useAppToast from '../../../hooks/useAppToast';
import useEthersSigner from '../../../hooks/useEthersSigner';
import useAppSupplies from '../../../hooks/useAppSupplies';
import useChainSelector from '../../../hooks/useChainSelector';
import { fetchAddressForChain } from '../../../services/apiClient';
import { BurnTxProgress, ChainEnum } from '../../../enum/BurnPageEnum';

export const BurnPageContext = React.createContext<any>(null);

const BurnPageProvider : React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [burnTransactions, setBurnTransactions] = useState<any[]>([]);
    const [isOldToken, setIsOldToken] = useState(false);
    const [burnAmount, setBurnAmount] = useState("");
    const [txButton, setTxButton] = useState<BurnTxProgress>(
        BurnTxProgress.default
    );
    const [txProgress, setTxProgress] = useState<boolean>(false);
    const [approveTxHash, setApproveTxHash] = useState<string | null>(null);
    const [burnTxHash, setBurnTxHash] = useState<string | null>(null);
    const [coinData, setCoinData] = useState<any>({});


    const { 
      walletAddress,isWalletConnected,walletBalance,isBalanceError,openChainModal,walletChain,chains,openConnectModal,
      } = useWallet();
    

      const {
        supplies,allSupplies,setSuppliesChain,suppliesChain,fetchSupplies,
      } = useAppSupplies(true);

    const { toastMsg, toastSev, showToast } = useAppToast();
    
    const ethersSigner = useEthersSigner({
        chainId: walletChain?.id ?? ChainEnum.mainnet,
    });
  
      const tokenAddress = fetchAddressForChain({
          chainId: suppliesChain?.id,
          tokenValue : isOldToken ? "oldToken" : "newToken"
        }
      );
    
    
    
      useEffect(() => {
        CoinGeckoApi.fetchCoinData()
          .then((data: any) => {
            //console.log("coin stats", data);
            setCoinData(data?.market_data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    
      useEffect(() => {
        if (!walletChain) return;
        let isSubscribed = true;
        // const newTokenAddress = fetchAddressForChain(
        //   walletChain?.id,
        //   isOldToken ? "oldToken" : "newToken"
        // );
        if (isSubscribed) setBurnTransactions([]);
        const isTestnet = isChainTestnet(walletChain?.id);
        let _chainObjects: any[] = [mainnet, avalanche, fantom];
        if (isTestnet) _chainObjects = [sepolia, avalancheFuji, fantomTestnet];
        Promise.all(ChainScanner.fetchAllTxPromises(isTestnet))
          .then((results: any) => {
            //console.log(results, isTestnet);
            if (isSubscribed) {
              let new_chain_results: any[] = [];
              results.forEach((results_a: any[], index: number) => {
                new_chain_results.push(
                  results_a.map((tx: any) => ({
                    ...tx,
                    chain: _chainObjects[index],
                  }))
                );
              });
              let res = new_chain_results.flat();
              console.log(res, isTestnet);
              res = ChainScanner.sortOnlyBurnTransactions(res);
              res = res.sort((a: any, b: any) => b.timeStamp - a.timeStamp);
              setBurnTransactions(res);
            }
          })
          .catch((err) => {
            console.log(err);
          });
        return () => {
          isSubscribed = false;
        };
      }, [walletChain, isOldToken]);

    const value = {
      burnTransactions, setBurnTransactions,
      isOldToken, setIsOldToken,
      burnAmount, setBurnAmount,
      txButton, setTxButton,
      txProgress, setTxProgress,
      approveTxHash, setApproveTxHash,
      burnTxHash, setBurnTxHash,
      coinData, setCoinData,
      suppliesChain
    }
  return (
        <BurnPageContext.Provider value ={value} >
            {children}
        </BurnPageContext.Provider>
  )
}

export default { BurnPageContext, BurnPageProvider};