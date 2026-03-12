import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Usercontext from './context/context.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { Auth0Provider } from '@auth0/auth0-react'




createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-0ujyv1zrwazx00qz.us.auth0.com"
    clientId="vkeMITH3eYBjp6Umlgq8VruhR2WPc7xh"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >

    <Provider store={store}>
      <Usercontext>
        <App />
      </Usercontext>
    </Provider>
  </Auth0Provider>
)
