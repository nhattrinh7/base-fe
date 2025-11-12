import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { createUserSlice } from './userSlice'
import { type IUserSlice } from './userSlice'

export const useBoundStore = create<IUserSlice>()(
  devtools(
    persist(
      // hàm tạo store
      (...a) => ({
        ...createUserSlice(...a),
      }),

      // cấu hình persist
      {
        name: 'user-store',
        // partialize: (state) => ({ user: state.user }), // chỉ lưu phần cần thiết
      }
    ),
    { name: 'UserStore', enabled: true } // Tên hiện trong Redux DevTools, devtools của zustand là Redux Devtools
  )
)