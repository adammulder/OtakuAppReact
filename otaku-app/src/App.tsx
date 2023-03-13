import Navbar from "./components/Navbar"
import routes from "./config/routes"
import { Routes, Route, HashRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Auth0Provider } from "@auth0/auth0-react";

function App() {


  return (
    <Auth0Provider
    domain="dev-tc0fdgng3f30p02b.us.auth0.com"
    clientId="QbeqhvhzPHoRPR5osqGq2nzAYnykFTyT"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <HashRouter>
    <Navbar />
        <Provider store={store}>
          <Routes>
            { routes.map((route, index) =>(
              <Route
                key={index}
                path={route.path}
                element={
                  <route.component />
                }
                />
            ))}
          </Routes>
          </Provider>
    </HashRouter>
    </Auth0Provider>
  )
}

export default App
