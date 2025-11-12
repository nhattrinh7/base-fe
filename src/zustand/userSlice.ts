import { type StateCreator } from 'zustand'
import { type IUser } from '../types/user.interface'

export interface IUserSlice {
  user: IUser | null
  setUser: (user: IUser) => void
  clearUser: () => void;
}

export const createUserSlice : StateCreator<IUserSlice, [], [], IUserSlice> = (set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
})