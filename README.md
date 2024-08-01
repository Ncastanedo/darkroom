# DARKROOM

## Introduction
This repository includes the modifications made to the DARKROOM-NFT project.

# Instructions for Wallet Integration
In this project, we aim to enhance the functionality of the NFT Darkroom Marketplace by replacing the static wallet address displayed on the connect button with the actual wallet address of the user after they connect their wallet. This will improve the user experience by providing real-time feedback on their connected wallet status. The integration involves setting up MetaMask for wallet connections, configuring the DAppProvider using `@usedapp/core`, and modifying the header component to dynamically display the connected wallet address. The process is tested using VS Code and a local environment.

## Step 1: Clone the Repository and Set Up the Project

**Clone the Repository and install Dependencies:**

   git clone https://github.com/YOUR_USERNAME/DARKROOM-NFT.git
   cd DARKROOM-NFT
   yarn install
   

## Step 2: Sep up an Ethereum environment to test
First of all, I am setting up a new Infura project to connect to Ethereum. This step is optional. You also could display a Truffle environment or so.

**Create an Infura Project:**
   - [Infura](https://infura.io/).
   - Select "Ethereum" as the network type within your project and copy the Project ID.

## Step 3: Modify DAppProvider
This component handles the connection with the blockchain. I am changing it to fit my Infura project.

**Modify `client/src/index.js`:**
   - Modify the file to include `DAppProvider` from `@usedapp/core` and configure it with the Infura Project ID. Please, check the modified archive above.

## Step 4: Modify the Header Component
In this component is allocated the static address. I am changing it to handle the wallet address.

**Modify `client/src/components/Header.js`:**
   - Update the component to handle wallet connection and display the connected address. Please, check the modified archive above.

## Step 5: Set Up MetaMask or another wallet
I am creating an new wallet using Metamask to test the updates in my local browser. You could use any other wallet provider or even a physical wallet.

**Install MetaMask:**
   - Go to [MetaMask](https://metamask.io/) and install the browser extension.
   - Follow the instructions to set up a new wallet. Now it is not necessary to check the recovery phrase but very very recommended


## Step 6: Run the Application

**Start the Development Server:**

   yarn dev

**Connect MetaMask to the Application:**
   - Open the browser and navigate to http://localhost:3000.
   - Click on the "Connect Wallet" button and connect the MetaMask wallet.

**Verify Wallet Connection:**
   - Ensure the button displays the connected wallet address after connecting MetaMask. It does! 😄


