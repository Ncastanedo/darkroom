import React, { useState, useEffect } from 'react';
import { useEthers } from '@usedapp/core';
import { Link } from 'react-router-dom';

const Header = () => {
  const { activateBrowserWallet, account } = useEthers();
  const [connectedAccount, setConnectedAccount] = useState('');

  const handleWallet = async () => {
    await activateBrowserWallet();
    if (account) {
      setConnectedAccount(account);
    }
  }

  useEffect(() => {
    if (account) {
      setConnectedAccount(account);
    }
  }, [account]);

  return (
    <div id="header">
      <Link to='/' id='logo'>NFT Room</Link>

      <div id="link-containers">
        <a>Start Hunting</a>
        <a>Dark NFTs</a>
        <a>Community</a>
        <a>Craft NFT</a>

        <button id="connect-wallet" onClick={handleWallet}>
          {connectedAccount ? connectedAccount : 'Connect Wallet'}
        </button>
      </div>
    </div>
  );
};

export default Header;
