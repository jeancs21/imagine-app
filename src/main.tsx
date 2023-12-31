import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import RouterApp from './routes/RouterApp';
import { Provider } from 'react-redux'
import store from './redux/store'
import { LayoutProvider } from './context/LayoutContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutProvider>
        <Provider store={store}>
          <RouterApp />
        </Provider>
      </LayoutProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
