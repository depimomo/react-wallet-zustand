import React from 'react';

import useWalletStore, { selectBalance, selectOnDeposit, selectOnWithdraw, selectUser } from '../store/wallet';

const Wallet = () => {
  const user = useWalletStore(selectUser);
  const balance = useWalletStore(selectBalance);
  const onDeposit = useWalletStore(selectOnDeposit);
  const onWithdraw = useWalletStore(selectOnWithdraw);

  return (
    <div>
      <h1>{user.first_name} Wallet</h1>
      <h2>Balance: Rp {balance.toLocaleString('ID')}</h2>
      <button onClick={onWithdraw}>Withdraw Rp 10.000</button>
      <button onClick={onDeposit}>Deposit Rp 10.000</button>
      <br />
      <br />
      <input/>
      <button>withdraw</button>
      <button>deposit</button>
    </div>
  );
};

export default Wallet;
