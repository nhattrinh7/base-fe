/* eslint-disable no-unused-vars */
// store/useAuthStore.ts
import { create } from 'zustand'
import CONSTANTS from '../utils/constant.utils'

interface AuthState {
  isAuthenticated: boolean
  token: string | null
  login: (token: string) => void
  logout: () => void
  refresh: (token: string) => void
}

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: !!localStorage.getItem(CONSTANTS.ACCESS_TOKEN_KEY),
  token: localStorage.getItem(CONSTANTS.ACCESS_TOKEN_KEY),
  login: (token: string) => {
    localStorage.setItem(CONSTANTS.ACCESS_TOKEN_KEY, token)
    set({ isAuthenticated: true, token })
  },
  logout: () => {
    localStorage.removeItem(CONSTANTS.ACCESS_TOKEN_KEY)
    set({ isAuthenticated: false, token: null })
  },
  refresh: (token: string) => {
    if (get().isAuthenticated) {
      localStorage.setItem(CONSTANTS.ACCESS_TOKEN_KEY, token)
      set({ token })
    }
  },
}))

export const logoutUser = () => {
  useAuthStore.getState().logout()
}

export const refreshToken = (token: string) => {
  useAuthStore.getState().refresh(token)
}

export const getUserToken = () => {
  return useAuthStore.getState().token
}
