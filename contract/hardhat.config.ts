// https://eth-goerli.g.alchemy.com/v2/Q5yqVIrC9mpeDqzbRetXO7h6LZw7jcDX
import { HardhatUserConfig } from "hardhat/config";
import '@nomiclabs/hardhat-waffle'

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Q5yqVIrC9mpeDqzbRetXO7h6LZw7jcDX',
      accounts: [
        // Metamask Goerli private key 
        '379e5e495d7a9d21d1149cb6447700a8e0b3084c92e8096b48f1228c94bda5eb'
      ]
    }
  }
};

export default config;
