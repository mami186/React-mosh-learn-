import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
import App from './App.tsx'
import { RouterProvider } from 'react-router-dom';
import router from './routing/rout.tsx';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={router}></RouterProvider>
  
    <ReactQueryDevtools/>
    </QueryClientProvider>

    
  </StrictMode>,
)
