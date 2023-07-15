import React from "react";
import Link from "next/link";
import { textVariant2, slideIn, zoom } from "../../util/motion";
import { motion } from "framer-motion";

const Q4Web3 = () => {
  return (
    <div className="my-1 py-8 px-2 mx-1 leading-loose bg-gradient-to-r from-white via-teal-100/70 to-green-100/70 text-black">
      <motion.h1
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="text-4xl font-semibold text-center my-4"
      >
        Quarter 4
      </motion.h1>
      <motion.h2
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="mb-4  font-semibold lg:text-2xl md:text-2xl text-xl
 text-teal-800  underline underline-offset-4"
      >
        W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
      </motion.h2>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h1
          className="font-bold lg:text-5xl md:text-5xl text-2xl
  mt-4"
        >
          Course Description:
        </h1>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          In this course you will learn how to develop Web 3.0 DApps, create a
          project, deploy it in production, write smart contracts, unit test
          them, and create user interfaces for them. We will also learn to
          develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in
          order to develop Web 3 applications you also need to build on top of
          Web 2.0 technologies which we have already covered in the previous
          quarters.
        </p>
      </motion.div>
      <motion.div
        variants={zoom("up", "bounce")}
        initial="hidden"
        whileInView="show"
        className="mt-8  border-teal-700 rounded-xl border-2 flex lg:flex-row md:flex-row flex-col lg:w-2/4 w-full "
      >
        <div className="lg:w-2/4 md:w-2/4 w-full font-bold text-3xl  text-teal-900 lg:h-40 lg:py-16 lg:px-6 md:h-40 md:py-14 md:px-8 px-6  py-6">
          Specialized Track
        </div>
        <div className="bg-gradient-to-r from-teal-800/70 to-green-500/70 md:w-2/4 lg:w-2/4 w-full text-white font-semibold text-2xl md:py-10 lg:px-12 lg:py-10 md:px-12 px-6 py-6">
          <h1>Duration</h1>
          <h3 className="lg:my-2 md:my-2 ">13 Weeks</h3>
        </div>
      </motion.div>
      <motion.h1
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="font-bold lg:text-5xl md:text-5xl text-2xl
  mt-4"
      >
        Course Outline:
      </motion.h1>
      <div>
        <motion.h2
          variants={slideIn("left", "spring", 0.9, 1.5)}
          initial="hidden"
          whileInView="show"
          className="lg:text-2xl md:text-2xl text-xl
 font-bold mb-2 mt-4"
        >
          Blockchain and Metaverse Theory
        </motion.h2>
        <motion.div variants={textVariant2} initial="hidden" whileInView="show">
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            href="/"
            target={"_blank"}
          >
            The Metaverse: And How It Will Revolutionize Everything by Matthew
            Ball
          </Link>

          <Link
            href="/"
            target={"_blank"}
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 block underline underline-offset-2 my-2"
          >
            Mastering Blockchain - Fourth Edition by Imran Bashir
          </Link>
        </motion.div>
      </div>
      <div>
        <motion.h2
          variants={slideIn("left", "spring", 0.9, 1.5)}
          initial="hidden"
          whileInView="show"
          className="lg:text-2xl md:text-2xl text-xl
 font-bold mb-2 mt-4"
        >
          Smart Contract Development in Solidity
        </motion.h2>
        <motion.div variants={textVariant2} initial="hidden" whileInView="show">
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            href="/"
            target={"_blank"}
          >
            Solidity Programming Essentials - Second Edition By Ritesh Modi
          </Link>

          <Link
            href="/"
            target={"_blank"}
            className="lg:text-lg md:text-lg text-base
font-normal text-blue-600 block underline underline-offset-2 my-2"
          >
            Solidity Learning Repo
          </Link>
        </motion.div>
      </div>
      <div>
        <motion.h2
          variants={slideIn("left", "spring", 0.5, 1.5)}
          initial="hidden"
          whileInView="show"
          className="lg:text-2xl md:text-2xl text-xl
 font-bold mb-2 mt-4"
        >
          Dapp Development using Ethers.js and Next.js 13
        </motion.h2>
        <motion.div variants={textVariant2} initial="hidden" whileInView="show">
          <Link
            className="lg:text-lg md:text-lg text-base
font-normal text-blue-600 underline underline-offset-2 my-2"
            href="/"
            target={"_blank"}
          >
            Dapp Learning Repo
          </Link>
        </motion.div>
      </div>
      <motion.h2
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-2xl md:text-2xl text-xl
 font-bold mb-2 mt-4"
      >
        Tokennomics
      </motion.h2>
      <motion.h2
        variants={slideIn("left", "spring", 0.9, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-2xl md:text-2xl text-xl
 font-bold mb-2 mt-4"
      >
        Blockchain Project: Create a Token and Launch ICO/IEO/IDO
      </motion.h2>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal"
        >
          As you probably know, the ICO (Initial Coin Offering) industry has
          been booming, and its completely reinventing the way new startups
          kickstart themselves. In fact, have a look at Wikipedia list of
          highest
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            target={"_blank"}
            href="/"
          >
            crowdfunding projects
          </Link>
          , and you will notice that blockchain projects absolutely dominate the
          list.
        </p>
        <Link
          className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
          href="/"
        >
          Understand the difference between IDO vs. IEO vs. ICO
        </Link>
      </motion.div>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal"
        >
          Also check these links for latest listings:
        </p>
        <Link
          className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
          href="/"
        >
          ICO list at ICO Drops
        </Link>
        <Link
          className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
          href="/"
        >
          ICO List of Best New Initial Coin Offerings
        </Link>
      </motion.div>
      <motion.p
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-lg md:text-lg text-base
 font-normal"
      >
        Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and
        IDOsTop-Rated Crypto Token Sales:
      </motion.p>
      <motion.div
        variants={slideIn("left", "spring", 0.7, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <Link
          className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
          href="/"
        >
          List of New ICOs, STOs, IEOs and IDOs
        </Link>
      </motion.div>

      <motion.div
        variants={slideIn("left", "spring", 0.9, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <Link
          className="block lg:text-lg md:text-lg text-base
        font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
          href="/"
        >
          ICO List Online
        </Link>
      </motion.div>

      <motion.div
        variants={slideIn("left", "spring", 1.1, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <Link
          className=" block lg:text-lg md:text-lg text-base
        font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
          href="/"
        >
          Binance IEO List
        </Link>
      </motion.div>

      <motion.div
        variants={slideIn("left", "spring", 1.3, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <Link
          className=" block lg:text-lg md:text-lg text-base
        font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
          href="/"
        >
          Binance Launchpad
        </Link>
      </motion.div>

      <motion.div
        variants={slideIn("left", "spring", 1.5, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <Link
          className="block lg:text-lg md:text-lg text-base
        font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
          href="/"
        >
          IEO List
        </Link>
      </motion.div>

      <motion.div
        variants={slideIn("left", "spring", 1.7, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <Link
          className="lg:text-lg md:text-lg text-base
        font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
          href="/"
        >
          Polkastarter
        </Link>
      </motion.div>

      <motion.h1
        variants={slideIn("left", "spring", 0.9, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-xl md:text-xl text-lg
 font-semibold"
      >
        Project Part 1: How to Launch a IEO on Binance Launchpad
      </motion.h1>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <Link
          className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
          href="/"
        >
          Read How to Launch an IEO
        </Link>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal"
        >
          Your first task of the project is to make a google slides presentation
          on how to start a IEO on the
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            target={"_blank"}
            href="/"
          >
            Binance Launch Pad
          </Link>
        </p>
        <h1
          className="lg:text-lg md:text-lg text-base
       font-semibold"
        >
          Note: Also document the alternatives to Binance Launchpad.
        </h1>
      </motion.div>
      <motion.h1
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-xl md:text-xl text-lg
 my-2 font-semibold"
      >
        Project Part 2: How to Launch a IDO on Polkastarter
      </motion.h1>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal"
        >
          Review the list of top
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            target={"_blank"}
            href="/"
          >
            fundraising platforms
          </Link>
        </p>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal"
        >
          Your second task of the project is to make a google slides
          presentation on how to start a IDO on the
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            target={"_blank"}
            href="/"
          >
            Polkastarter
          </Link>
        </p>
      </motion.div>
      <motion.h1
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-xl md:text-xl text-lg
 my-2 font-semibold"
      >
        Project Part 3: Create a Pako Token
      </motion.h1>
      <motion.p
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="lg:text-lg md:text-lg text-base
 font-normal"
      >
        By creating a token and related contracts, you will also learn how to
        handle money sent to your contracts, which should come in handy if you
        want to create some kind of paid decentralized service in the future.
      </motion.p>
      <motion.p
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="lg:text-lg md:text-lg text-base
 font-normal my-2"
      >
        Therefore, for the sake of this chapter, let imagine that our Pako DApp
        uses its own coin – the Pako Token. We will create two contracts – one
        for the token itself and one for the token crowd sale (the ICO).
      </motion.p>
      <motion.p
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="lg:text-lg md:text-lg text-base
 font-normal"
      >
        Now Create your own Pako ERC20 Token and deploy it on a testnet. The
        Token should be to use OpenZeppelin contracts. You will use the Hardhat
        development environment. Also, write at least twenty automated tests. We
        will be using Solidity and Typescript for development.
      </motion.p>
      <motion.h1
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-xl md:text-xl text-lg
 my-2 font-semibold"
      >
        Project Part 4: Develop Crowd Sale Contract
      </motion.h1>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal"
        >
          This contract will be responsible for allowing users to exchange ETH
          for our Pako Token. In order to do that we need to set a price for our
          token (1 ETH = 100 Pako Token)
        </p>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          Implement a payable buyToken() function.
        </p>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          Emit a BuyTokens event that will log who’s the buyer, the amount of
          ETH sent and the amount of Token bought
        </p>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          Transfer 75% of the Tokens to the Crowd Sale contract at deployment
          time. i.e. Right after the contract is deployed, we want the token
          contract to send 75% of our token supply to it. While 25% remain in
          our personal (owner) account.
        </p>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          Transfer the ownership of the Crowd Sale contract (at deploy time) to
          our frontend address so that we are able to withdraw the ETH.
        </p>
      </motion.div>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          You can use the openzeppelin
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            target={"_blank"}
            href="/"
          >
            crowd sale contracts
          </Link>
          however you will have to update the code to the latest solidity
          version.
        </p>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          Also write extensive tests, for example we will simply send a
          transaction of 1 ETH from a random account to the contract. After the
          transaction, we should expect the account to have received Pako, while
          the contract balance should have been reduced.
        </p>
      </motion.div>
      <motion.div
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <h1
          className="lg:text-lg md:text-lg text-base
 my-2 font-semibold"
        >
          Note: Before you get started writing the token contract we suggest you
          review the access control
        </h1>

        <Link
          target={"_blank"}
          className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          href={"https://docs.openzeppelin.com/contracts/4.x/access-control"}
        >
          https://docs.openzeppelin.com/contracts
          <br className="md:hidden" />
          /4.x/access-control
        </Link>
      </motion.div>
      <motion.h1
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-xl md:text-xl text-lg
 my-2 font-semibold"
      >
        Project Part 5: Trying it with MetaMask
      </motion.h1>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          While it always good to test your code, it often more satisfying to
          see the results of your work wrapped in a nice UI. Let see how we can
          deploy our contracts and get some Pako tokens into our MetaMask
          wallet!
        </p>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          We start by running our deployment scripts for the test network so
          that the new token contracts are uploaded and deployed.
        </p>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          When it done, take note of what addresses the contracts were uploaded
          to and copy it!
        </p>
        <p className="text-lg font-normal my-2">
          Now head to MetaMask, and send a transaction of 1 ETH to the crowd
          sale contract address. If your MetaMask wallet does not have any
          ethers, remember that you can use any faucet.
        </p>
      </motion.div>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          After the transaction has been confirmed, you might be confused about
          why you can not see any tokens in your wallet. It turns out that you
          need to manually add the token address in MetaMask in order to
          register it – after all, there are so many tokens out there, there is
          no way MetaMask could list them all by default!
        </p>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          To do this, open the side menu and click on the Add token button to
          get started:
        </p>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          Once you were on the token page, click on Add custom token and paste
          in the token contract address in the address field.
        </p>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          After confirming that you want to add the token, you should be able to
          see your Pako balance right next to your ETH balance in the wallet.
          How cool!
        </p>
      </motion.div>
      <motion.h1
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-xl md:text-xl text-lg
 my-2 font-semibold"
      >
        Project Part 6: Trying it with Multisignature Wallets
      </motion.h1>
      <motion.div
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          Read
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/"
            target={"_blank"}
          >
            https://www.coindesk.com/tech/2020 <br className="md:hidden" />
            /11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/
          </Link>
        </p>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://safe.global/"
            target={"_blank"}
          >
            with multi-sigs to do what you did in the last part.
          </Link>
        </p>
      </motion.div>
      <motion.h1
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-xl md:text-xl text-lg
 my-2 font-semibold"
      >
        Project Part 7: Sending Tokens using Ethers.js
      </motion.h1>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          Write a Typescript program to send Pako Token to some friend address
          using Ethers.js.
        </p>
        <Link
          className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          href={
            "https://ethereum.org/en/developers/tutorials/send-token-etherjs/"
          }
          target={"_blank"}
        >
          You may follow this tutorial
        </Link>
      </motion.div>

      <motion.h1
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-xl md:text-xl text-lg
 my-2 font-semibold"
      >
        Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT
      </motion.h1>
      <motion.div
        variants={slideIn("left", "spring", 0.7, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <Link
          className="lg:text-lg md:text-lg text-base
        font-normal text-blue-600 underline underline-offset-2 my-2"
          href={
            "https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/"
          }
          target={"_blank"}
        >
          Read this NFT tutorial series
        </Link>
      </motion.div>
      <motion.div
        variants={slideIn("left", "spring", 0.9, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <p
          className="lg:text-lg md:text-lg text-base
        font-normal my-2"
        >
          Create a NFT contract using the
          <Link
            className="lg:text-lg md:text-lg text-base mx-1
          font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://docs.openzeppelin.com/contracts/4.x/erc721"
            target={"_blank"}
          >
            OpenZepplen ERC721 NFT Standard
          </Link>
        </p>
      </motion.div>
      <motion.div
        variants={slideIn("left", "spring", 1.1, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <p
          className="lg:text-lg md:text-lg text-base
        font-normal my-2"
        >
          You may use the
          <Link
            className="lg:text-lg md:text-lg text-base mx-1
          font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://docs.openzeppelin.com/contracts/4.x/erc721#Presets"
            target={"_blank"}
          >
            Preset ERC721 contract
          </Link>
        </p>
      </motion.div>
      <motion.div
        variants={slideIn("left", "spring", 1.3, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <p
          className="lg:text-lg md:text-lg text-base
        font-normal my-2"
        >
          Deploy your NFT contract on a testnet, mint it, and view it on the
          MetaMask wallet and list it on
          <Link
            className="lg:text-lg md:text-lg text-base mx-1
          font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://opensea.io/"
            target={"_blank"}
          >
            OpenSea Marketplace
          </Link>
          for sale.
        </p>
      </motion.div>
      <motion.div
        variants={slideIn("left", "spring", 1.5, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <p
          className="lg:text-lg md:text-lg text-base
        font-normal my-2"
        >
          Implement a
          <Link
            className="lg:text-lg mx-1 md:text-lg text-base
          font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/"
            target={"_blank"}
          >
            ERC721 Market
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Q4Web3;
