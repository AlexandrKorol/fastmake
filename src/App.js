import React, { useState } from 'react'
import { Header, Footer } from "./components/_index"
import { Dashboard } from "./pages/admin/_index"
import { Home, ItemPage, CatalogPage, ProductPage, Login, Registration } from "./pages/_index"
import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {
  const[token, setToken] = useState()

  return (
    <div className="App">
      <BrowserRouter>

        <Header />

          <Switch>
            <Route path="/" component={ Home } exact />
            <Route path="/catalog" component={ CatalogPage } exact />
            <Route path="/products" component={ ProductPage } exact />
            <Route path="/products/:id" component={ ItemPage } exact />

            <Route path="/login" component={ Login } exact />
            <Route path="/registration" component={ Registration } exact />

            <Route path="/dashboard" component={ Dashboard } exact />
          </Switch>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App
