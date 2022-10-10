import React, { useEffect, useState } from 'react';

import useWalletStore, {
  selectBalance,
  selectFetchUser,
  selectOnDeposit,
  selectOnWithdraw,
  selectUser,
} from '../store/wallet';

const Wallet = () => {
  const user = useWalletStore(selectUser);
  const balance = useWalletStore(selectBalance);
  const onDeposit = useWalletStore(selectOnDeposit);
  const onWithdraw = useWalletStore(selectOnWithdraw);
  const fetchUser = useWalletStore(selectFetchUser);

  const [customAmount, setCustomAmount] = useState(0);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    fetchUser(userId);
  }, []);

  const onIdUserSubmit = () => {
    fetchUser(userId);
  }

  return (
    <div>
      <img src={user.avatar} alt="user avatar"/>
      <h1>{user.first_name} Wallet</h1>
      <input
        type="number"
        value={userId}
        onChange={({ target }) => setUserId(target.value)} />
      <button onClick={onIdUserSubmit}>submit user id</button>
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
