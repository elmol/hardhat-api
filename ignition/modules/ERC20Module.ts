import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import hre from "hardhat";


const OWNER_ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

export default buildModule("ERC20TokenModule", (m) => {

  const ownerAddress = m.getParameter("ownerAddress", OWNER_ADDRESS);
  const erc20 = m.contract("ERC20Token", [ownerAddress]);

  
  return { erc20 };
});
