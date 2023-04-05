import React, { useContext } from 'react'
import { TransactionContext } from '../../context/Transaction.context';

const TransactionWidget = () => {

  const { connectWallet, currentAccount } = useContext(TransactionContext)

  return (
    <div className='flex w-200 bg-gray h-auto'>
      {!currentAccount ? (
        // Do not display button to connect account if the wallet is already linked to the application 
        <button
          className='bg-blue-600 flex-initial rounded-r p-1 text-gray-300'
          onClick={connectWallet}
        >
          Connect Wallet!
        </button>
      ): (
        <button
          className='bg-blue-900 flex-initial rounded-r p-1 text-gray-100'
        >
          Disconnect Account!
        </button>
      )}
    </div>
  )
}


export default TransactionWidget;