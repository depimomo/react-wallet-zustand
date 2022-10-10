import produce from 'immer';
import create from 'zustand';

const initialUser = { first_name: 'Monica' };
const initialBalance = 100000;

const useWalletStore = create((set) => ({
  user: initialUser,
  balance: initialBalance,
  onDeposit: (amount) =>
    set(produce((state) => {
      state.balance = state.balance + amount
    })),
  onWithdraw: (amount) =>
    set(produce((state) => {
      if (state.balance >= amount) {
        state.balance = state.balance - amount;
      }
    })),
}));

// selector bisa dibuat di sini, biar bisa reusesable
export const selectBalance = (state) => state.balance;
export const selectUser = (state) => state.user;
export const selectOnDeposit = (state) => state.onDeposit;
export const selectOnWithdraw = (state) => state.onWithdraw;

export default useWalletStore;
