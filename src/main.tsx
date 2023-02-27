import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import "./style/globals.css"

import { USelectCampusSolo } from './views/user/select_solo/campus'
import { USelectCursoSolo } from './views/user/select_solo/curso'
import { USelectDiscenteSolo } from './views/user/select_solo/discente'
import { USelectDocenteSolo } from './views/user/select_solo/docente'
import { USelectPesquisaSolo } from './views/user/select_solo/pesquisa'

import { USelectCampusAll } from './views/user/select_all/campus'
import { USelectCursoAll } from './views/user/select_all/curso'
import { USelectDiscenteAll } from './views/user/select_all/discente'
import { USelectDocenteAll } from './views/user/select_all/docente'
import { USelectPesquisaAll } from './views/user/select_all/pesquisa'

import { ASelectCampusSolo } from './views/admin/select_solo/campus'
import { ASelectCursoSolo } from './views/admin/select_solo/curso'
import { ASelectDiscenteSolo } from './views/admin/select_solo/discente'
import { ASelectDocenteSolo } from './views/admin/select_solo/docente'
import { ASelectMatriculaSolo } from './views/admin/select_solo/matricula'
import { ASelectPesquisaSolo } from './views/admin/select_solo/pesquisa'

import { ASelectCampusAll } from './views/admin/select_all/campus'
import { ASelectCursoAll } from './views/admin/select_all/curso'
import { ASelectDiscenteAll } from './views/admin/select_all/discente'
import { ASelectDocenteAll } from './views/admin/select_all/docente'
import { ASelectMatriculaAll } from './views/admin/select_all/matricula'
import { ASelectPesquisaAll } from './views/admin/select_all/pesquisa'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />

      <Route path='/user/campus' element={<USelectCampusAll/>}/>
      <Route path='/user/cursos' element={<USelectCursoAll/>}/>
      <Route path='/user/discentes' element={<USelectDiscenteAll/>}/>
      <Route path='/user/docentes' element={<USelectDocenteAll/>}/>
      <Route path='/user/pesquisas' element={<USelectPesquisaAll/>}/>

      <Route path='/user/campus/:id' element={<USelectCampusSolo/>}/>
      <Route path='/user/curso/:id' element={<USelectCursoSolo/>}/>
      <Route path='/user/discente/:id' element={<USelectDiscenteSolo/>}/>
      <Route path='/user/docente/:id' element={<USelectDocenteSolo/>}/>
      <Route path='/user/pesquisa/:id' element={<USelectPesquisaSolo/>}/>
      
      <Route path='/admin/campus' element={<ASelectCampusAll/>}/>
      <Route path='/admin/cursos' element={<ASelectCursoAll/>}/>
      <Route path='/admin/discentes' element={<ASelectDiscenteAll/>}/>
      <Route path='/admin/docentes' element={<ASelectDocenteAll/>}/>
      <Route path='/admin/matriculas' element={<ASelectMatriculaAll/>}/>
      <Route path='/admin/pesquisas' element={<ASelectPesquisaAll/>}/>

      <Route path='/admin/campus/:id' element={<ASelectCampusSolo/>}/>
      <Route path='/admin/curso/:id' element={<ASelectCursoSolo/>}/>
      <Route path='/admin/discente/:id' element={<ASelectDiscenteSolo/>}/>
      <Route path='/admin/docente/:id' element={<ASelectDocenteSolo/>}/>
      <Route path='/admin/matricula/:id' element={<ASelectMatriculaSolo/>}/>
      <Route path='/admin/pesquisa/:id' element={<ASelectPesquisaSolo/>}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
