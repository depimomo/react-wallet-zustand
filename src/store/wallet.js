import create from 'zustand';

const initialUser = { first_name: 'Monica' };
const initialBalance = 100000;

const useWalletStore = create((set) => ({
  user: initialUser,
  balance: initialBalance,
  onDeposit: () => set((state) => {
    return { ...state, balance: state.balance + 10000 }
  }),
  onWithdraw: () => set((state) => {
    if (state.balance >= 10000) {
      return { ...state, balance: state.balance - 10000 };
    }
    return state;
  }),
}));

// selector bisa dibuat di sini, biar bisa reusesable
export const selectBalance = (state) => state.balance;
export const selectUser = (state) => state.user;
export const selectOnDeposit = (state) => state.onDeposit;
export const selectOnWithdraw = (state) => state.onWithdraw;

export default useWalletStore;
