import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import places from './redux/places'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={places}>
      <App />
    </Provider>
  </StrictMode>,
)
