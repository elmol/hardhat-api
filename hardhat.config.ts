import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "hardhat-switch-network";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
};

export default config;
