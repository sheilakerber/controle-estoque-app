import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/products', () => {
      return [
        {
          id: 1,
          product: 'produtoTeste'
        } 
      ]
    })
  }
})




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);