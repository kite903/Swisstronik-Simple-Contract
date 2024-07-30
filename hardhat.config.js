require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = vars.get("PRIVATE_KEY");

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "swisstronik",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: `test`,
    customChains: [
      {
        network: "swisstronik",
        chainId: 1291,
        urls: {
          apiURL: "https://explorer-evm.testnet.swisstronik.com/api",
          browserURL: "https://explorer-evm.testnet.swisstronik.com",
        },
      },
    ],
  },
};
