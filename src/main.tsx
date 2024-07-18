import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import './index.css'
import { MantineProvider } from '@mantine/core';
import { CalculatorContextProvider } from './context/CalculatorContext.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme='dark'>
      <CalculatorContextProvider>
        <App />
      </CalculatorContextProvider>
    </MantineProvider>
  </React.StrictMode>,
)
