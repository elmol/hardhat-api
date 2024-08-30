import {
  loadFixture
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("ERC20Token", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const ERC20 = await hre.ethers.getContractFactory("ERC20Token");
    const erc20 = await ERC20.deploy(owner);

    return { erc20, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right name", async function () {
      const { erc20 } = await loadFixture(deployFixture);
      expect(await erc20.name()).to.equal("ERC20Token");
    });

    it("Should set the right owner", async function () {
      const { erc20, owner } = await loadFixture(deployFixture);
      expect(await erc20.owner()).to.equal(owner.address);
    });
  });

});