import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline'

import theme from './theme.ts'
import { ThemeProvider } from '@mui/material/styles'
import router from './routes/index.ts'
import { RouterProvider } from 'react-router-dom';

// CssBaseline dùng để nhất quán css trên các trình duyệt
// có thể dùng thêm 'material-ui-confirm' nếu cânz
// css thường bằng sx prop

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  </StrictMode>,
)
