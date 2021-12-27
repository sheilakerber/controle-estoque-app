import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'
import { createServer } from 'miragejs'
import { json } from 'stream/consumers';

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

    this.post('/products', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return data
    })
  }
})




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);