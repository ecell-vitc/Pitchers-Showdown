import { create } from 'zustand';

const useAuthStore = create((set) => ({
  auth: {
    is_logged: false,
    user: undefined,
    balance: 0,
  },
  login: (user, balance) =>
    set(() => ({
      auth: {
        is_logged: true,
        user,
        balance,
      },
    })),
  logout: () =>
    set(() => ({
      auth: {
        is_logged: false,
        user: undefined,
        balance: 0,
      },
    })),
}));

export default useAuthStore;