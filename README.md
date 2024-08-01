# DARKROOM

## Introduction
This repository includes the modifications made to the DARKROOM-NFT project.

# Instructions for Wallet Integration

## Step 1: Clone the Repository and Set Up the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/DARKROOM-NFT.git
   cd DARKROOM-NFT
   ```

2. **Install Dependencies:**
   ```bash
   yarn install
   ```

## Step 2: Configure DAppProvider

1. **Create an Infura Project:**
   - Go to [Infura](https://infura.io/).
   - Sign up and create a new project.
   - Select "Ethereum" as the network type.
   - Copy the Project ID from your Infura project.

2. **Open `client/src/index.js`:**
   - Modify the file to include `DAppProvider` from `@usedapp/core` and configure it with your Infura Project ID.

## Step 3: Modify the Header Component

1. **Open `client/src/components/Header.js`:**
   - Update the component to handle wallet connection and display the connected address.

## Step 4: Set Up MetaMask

1. **Install MetaMask:**
   - Go to [MetaMask](https://metamask.io/) and install the browser extension.
   - Follow the instructions to set up a new wallet.

2. **Connect MetaMask to Your Application:**
   - Open your browser and navigate to `http://localhost:3000`.
   - Click on the "Connect Wallet" button and connect your MetaMask wallet.

## Step 5: Run the Application

1. **Start the Development Server:**
   ```bash
   yarn dev
   ```

2. **Verify Wallet Connection:**
   - Ensure the button displays the connected wallet address after connecting MetaMask.

## Notes

- Ensure MetaMask is installed in your browser.
- The Infura project ID is required for connecting to the Ethereum network.

## License
This project is licensed under the MIT License.
```
