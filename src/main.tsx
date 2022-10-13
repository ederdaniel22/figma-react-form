import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Text } from './components/Text'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Text children={undefined} />
  </React.StrictMode>
)
