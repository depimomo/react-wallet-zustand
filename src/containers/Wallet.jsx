import React, { useState } from 'react';

import useWalletStore, { selectBalance, selectOnDeposit, selectOnWithdraw, selectUser } from '../store/wallet';

const Wallet = () => {
  const user = useWalletStore(selectUser);
  const balance = useWalletStore(selectBalance);
  const onDeposit = useWalletStore(selectOnDeposit);
  const onWithdraw = useWalletStore(selectOnWithdraw);

  const [customAmount, setCustomAmount] = useState(0);

  return (
    <div>
      <h1>{user.first_name} Wallet</h1>
      <h2>Balance: Rp {balance.toLocaleString('ID')}</h2>
      <button onClick={() => onWithdraw(10000)}>Withdraw Rp 10.000</button>
      <button onClick={() => onDeposit(10000)}>Deposit Rp 10.000</button>
      <br />
      <br />
      <input
        type="number"
        value={customAmount}
        onChange={({ target }) => setCustomAmount(parseInt(target.value))}
      />
      <button onClick={() => onWithdraw(customAmount)}>withdraw</button>
      <button onClick={() => onDeposit(customAmount)}>deposit</button>
    </div>
  );
};

export default Wallet;
