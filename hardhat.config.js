require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.7",
  networks: {
    local: {
      url: "http://127.0.0.1:8545/",
      key: "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6",
    },
  },
};
