// import * as React from 'react'
import ReactDOM from 'react-dom'
// import 'module-alias/register'
// import { StyledEngineProvider } from '@mui/material/styles'
import App from 'App'
// import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { ErrorBoundary } from 'react-error-boundary'
import Fallback from './components/ErrorFallback'
// const domain = process.env.REACT_APP_AUTH0_DOMAIN
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
ReactDOM.render(
  // <Auth0Provider
  //   domain={domain}
  //   clientId={clientId}
  //   redirectUri={window.location.origin}
  // >
  //  <StyledEngineProvider injectFirst></StyledEngineProvider>
  <ErrorBoundary FallbackComponent={Fallback}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>,

  // </Auth0Provider>
  document.querySelector('#root'),
)
