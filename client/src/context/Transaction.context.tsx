import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../utils/constants'

type GlobalContext = {
 value: string;
 connectWallet: () => void;
 transact: () => void;
 currentAccount: string[] | string
}

declare global {
  interface Window{
    ethereum: any
  }
}

type ContextProviderProps = {
  children?: JSX.Element | JSX.Element[];
}

export const TransactionContext = React.createContext<GlobalContext>({
  value: 'init',
  connectWallet: () => {},
  transact: () => {},
  currentAccount: [],
});

const { ethereum } = window

const getEthContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner();

  const transactionContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);


  console.log({
    provider,
    signer,
    transactionContract
  })
}



export const TransactionProvider = ({children}: ContextProviderProps) => {

  const [ accounts, setAccounts] = useState([]);
  const [ currentAccount, setCurrentAccount ] = useState<string | string[]>('')

  const checkWalletConnection = async () => {
    try{
      if(!ethereum) {
        console.info('Ethereum isn\'t connected');
        return false 
      }
      const accounts = await ethereum.request({method: 'eth_accounts'});
      if(accounts && accounts.length){
        setAccounts(accounts);
        setCurrentAccount(accounts[0]);
      }    
    }
    catch(e){
      console.debug('No ethereum account/object found');
    }
  }

  const connectWallet = async () => {
    try{
      if(!ethereum) {
        console.info('Ethereum isn\'t connected');
        return false 
      }
      const accounts = await ethereum.request({method: 'eth_requestAccounts'});
      console.log(accounts);
      setCurrentAccount(accounts[0])
    }
    catch(e){
      console.debug('No ethereum account/object found');
      console.error(e);
    }
  }

  const transact = async () => {
    try{
      if(!ethereum) {
        console.info('Ethereum isn\'t connected');
        return false 
      }
    }
    catch(e){

    }
  }

  useEffect(() => {
    checkWalletConnection();
  },[])


  return (
    <TransactionContext.Provider value={{
      value: 'init',
      connectWallet: connectWallet,
      transact: transact,
      currentAccount: currentAccount
    }}>
      {children}
    </TransactionContext.Provider>
  )

}