// constants to be used for the application 

export const CONTRACT_ADDRESS = import.meta.env.REACT_APP_CONTRACT_ADDRESS || '0xA0DD038B3Ed9548615471D1cFc706daD46114765'
// Test network, won't be of any use 

import abi from './Transactions.json'

export const CONTRACT_ABI = abi.abi; 