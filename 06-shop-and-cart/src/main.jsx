import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import { FiltersProvider } from './context/filters.jsx'
import { CartProvider } from './context/cart.jsx'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </FiltersProvider>,
)
