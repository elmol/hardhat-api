import hre from "hardhat";

import "@nomicfoundation/hardhat-toolbox";

import "hardhat-switch-network";
import ERC20Module from "../ignition/modules/ERC20Module";



export async function deploy() {
    //await hre.switchNetwork("localhost"); //to switch network
    const { erc20 } = await hre.ignition.deploy(ERC20Module);
    console.log(`erc20 deployed to: ${await erc20.getAddress()}`);
    return erc20;
}
