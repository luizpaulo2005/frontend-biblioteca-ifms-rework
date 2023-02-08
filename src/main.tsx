import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import "./style/globals.css"
import { USelectSolo } from './views/user/select_solo/pesquisa'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/pesquisa/:id' element={<USelectSolo/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
